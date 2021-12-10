package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"

	// this line is used by starport scaffolding # 1
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateCounterquote{}, "drife/CreateCounterquote", nil)
	cdc.RegisterConcrete(&MsgUpdateCounterquote{}, "drife/UpdateCounterquote", nil)
	cdc.RegisterConcrete(&MsgDeleteCounterquote{}, "drife/DeleteCounterquote", nil)

	cdc.RegisterConcrete(&MsgCreateRide{}, "drife/CreateRide", nil)
	cdc.RegisterConcrete(&MsgCounterQuote{}, "drife/CounterQuote", nil)
	cdc.RegisterConcrete(&MsgAcceptRide{}, "drife/AcceptRide", nil)
	cdc.RegisterConcrete(&MsgEndRide{}, "drife/EndRide", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCounterquote{},
		&MsgUpdateCounterquote{},
		&MsgDeleteCounterquote{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRide{},
		&MsgCounterQuote{},
		&MsgAcceptRide{},
		&MsgEndRide{},
	)
	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
