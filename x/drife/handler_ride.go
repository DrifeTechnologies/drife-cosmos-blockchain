// x/blog/handler_post.go
package drife

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/drife/x/drife/keeper"
	"github.com/example/drife/x/drife/types"
)

func handleMsgCreateRide(ctx sdk.Context, k keeper.Keeper, msg *types.MsgCreateRide) (*sdk.Result, error) {
	k.CreateRide(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}

func handleMsgCounterQuote(ctx sdk.Context, k keeper.Keeper, msg *types.MsgCounterQuote) (*sdk.Result, error) {
	k.AddCounterQuote(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}

func handleMsgAcceptRide(ctx sdk.Context, k keeper.Keeper, msg *types.MsgAcceptRide) (*sdk.Result, error) {
	k.AcceptRide(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}

func handleMsgEndRide(ctx sdk.Context, k keeper.Keeper, msg *types.MsgEndRide) (*sdk.Result, error) {
	k.EndRide(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}
