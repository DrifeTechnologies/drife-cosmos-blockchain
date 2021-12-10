package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/example/drife/x/drife/types"
)

func (k msgServer) CreateCounterquote(goCtx context.Context, msg *types.MsgCreateCounterquote) (*types.MsgCreateCounterquoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var counterquote = types.Counterquote{
		Creator:        msg.Creator,
		PremiumPercent: msg.PremiumPercent,
		RideId:         msg.RideId,
	}

	id := k.AppendCounterquote(
		ctx,
		counterquote,
	)

	return &types.MsgCreateCounterquoteResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCounterquote(goCtx context.Context, msg *types.MsgUpdateCounterquote) (*types.MsgUpdateCounterquoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var counterquote = types.Counterquote{
		Creator:        msg.Creator,
		Id:             msg.Id,
		PremiumPercent: msg.PremiumPercent,
		RideId:         msg.RideId,
	}

	// Checks that the element exists
	if !k.HasCounterquote(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetCounterquoteOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCounterquote(ctx, counterquote)

	return &types.MsgUpdateCounterquoteResponse{}, nil
}

func (k msgServer) DeleteCounterquote(goCtx context.Context, msg *types.MsgDeleteCounterquote) (*types.MsgDeleteCounterquoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasCounterquote(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetCounterquoteOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCounterquote(ctx, msg.Id)

	return &types.MsgDeleteCounterquoteResponse{}, nil
}
