package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCounterquote{}

func NewMsgCreateCounterquote(creator string, premiumPercent int64, rideId int64) *MsgCreateCounterquote {
	return &MsgCreateCounterquote{
		Creator:        creator,
		PremiumPercent: premiumPercent,
		RideId:         rideId,
	}
}

func (msg *MsgCreateCounterquote) Route() string {
	return RouterKey
}

func (msg *MsgCreateCounterquote) Type() string {
	return "CreateCounterquote"
}

func (msg *MsgCreateCounterquote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCounterquote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCounterquote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCounterquote{}

func NewMsgUpdateCounterquote(creator string, id uint64, premiumPercent int64, rideId int64) *MsgUpdateCounterquote {
	return &MsgUpdateCounterquote{
		Id:             id,
		Creator:        creator,
		PremiumPercent: premiumPercent,
		RideId:         rideId,
	}
}

func (msg *MsgUpdateCounterquote) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCounterquote) Type() string {
	return "UpdateCounterquote"
}

func (msg *MsgUpdateCounterquote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCounterquote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCounterquote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCounterquote{}

func NewMsgDeleteCounterquote(creator string, id uint64) *MsgDeleteCounterquote {
	return &MsgDeleteCounterquote{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCounterquote) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCounterquote) Type() string {
	return "DeleteCounterquote"
}

func (msg *MsgDeleteCounterquote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCounterquote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCounterquote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
