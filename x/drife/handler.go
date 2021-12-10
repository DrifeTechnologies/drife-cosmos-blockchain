package drife

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/example/drife/x/drife/keeper"
	"github.com/example/drife/x/drife/types"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
	msgServer := keeper.NewMsgServerImpl(k)

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {
		// this line is used by starport scaffolding # 1
		case *types.MsgCreateCounterquote:
			res, err := msgServer.CreateCounterquote(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateCounterquote:
			res, err := msgServer.UpdateCounterquote(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteCounterquote:
			res, err := msgServer.DeleteCounterquote(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateRide:
			return handleMsgCreateRide(ctx, k, msg)

		case *types.MsgCounterQuote:
			return handleMsgCounterQuote(ctx, k, msg)

		case *types.MsgAcceptRide:
			return handleMsgAcceptRide(ctx, k, msg)

		case *types.MsgEndRide:
			return handleMsgEndRide(ctx, k, msg)
		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}
