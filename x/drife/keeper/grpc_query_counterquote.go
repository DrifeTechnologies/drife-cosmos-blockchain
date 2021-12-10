package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/example/drife/x/drife/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CounterquoteAll(c context.Context, req *types.QueryAllCounterquoteRequest) (*types.QueryAllCounterquoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var counterquotes []*types.Counterquote
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	counterquoteStore := prefix.NewStore(store, types.KeyPrefix(types.CounterquoteKey))

	pageRes, err := query.Paginate(counterquoteStore, req.Pagination, func(key []byte, value []byte) error {
		var counterquote types.Counterquote
		if err := k.cdc.UnmarshalBinaryBare(value, &counterquote); err != nil {
			return err
		}

		counterquotes = append(counterquotes, &counterquote)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCounterquoteResponse{Counterquote: counterquotes, Pagination: pageRes}, nil
}

func (k Keeper) Counterquote(c context.Context, req *types.QueryGetCounterquoteRequest) (*types.QueryGetCounterquoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var counterquote types.Counterquote
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasCounterquote(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCounterquoteIDBytes(req.Id)), &counterquote)

	return &types.QueryGetCounterquoteResponse{Counterquote: &counterquote}, nil
}
