package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/example/drife/x/drife/types"
)

func TestCounterquoteMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCounterquote(ctx, &types.MsgCreateCounterquote{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestCounterquoteMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCounterquote
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCounterquote{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCounterquote{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCounterquote{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCounterquote(ctx, &types.MsgCreateCounterquote{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCounterquote(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCounterquoteMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCounterquote
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCounterquote{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCounterquote{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCounterquote{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCounterquote(ctx, &types.MsgCreateCounterquote{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCounterquote(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
