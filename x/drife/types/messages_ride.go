// x/blog/types/messages_post.go
package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRide{}

func NewMsgCreateRide(rider string, eligibleDrivers []string, initalTime int64, initialDistance int64, boostPercent int64) *MsgCreateRide {
	return &MsgCreateRide{
		Rider:           rider,
		EligibleDrivers: eligibleDrivers,
		InitialTime:     initalTime,
		InitialDistance: initialDistance,
		BoostPercent:    boostPercent,
		RideState:       0,
	}
}

// Route ...
func (msg MsgCreateRide) Route() string {
	return RouterKey
}

// Type ...
func (msg MsgCreateRide) Type() string {
	return "CreateRide"
}

// GetSigners ...
func (msg *MsgCreateRide) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Rider)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes ...
func (msg *MsgCreateRide) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic ...
func (msg *MsgCreateRide) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Rider)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// Counter Quote

func NewMsgCounterQuote(driver string, rideId int64, premiumPercent int64) *MsgCounterQuote {
	return &MsgCounterQuote{
		Driver:         driver,
		RideId:         rideId,
		PremiumPercent: premiumPercent,
	}
}

// Route ...
func (msg MsgCounterQuote) Route() string {
	return RouterKey
}

// Type ...
func (msg MsgCounterQuote) Type() string {
	return "CounterQuote"
}

// GetSigners ...
func (msg *MsgCounterQuote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Driver)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes ...
func (msg *MsgCounterQuote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic ...
func (msg *MsgCounterQuote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Driver)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// Accept Ride

func NewMsgAcceptRide(rider string, rideId int64, driver string) *MsgAcceptRide {
	return &MsgAcceptRide{
		Rider:  rider,
		Driver: driver,
		RideId: rideId,
	}
}

// Route ...
func (msg MsgAcceptRide) Route() string {
	return RouterKey
}

// Type ...
func (msg MsgAcceptRide) Type() string {
	return "AcceptRide"
}

// GetSigners ...
func (msg *MsgAcceptRide) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Driver)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes ...
func (msg *MsgAcceptRide) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic ...
func (msg *MsgAcceptRide) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Driver)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

func NewMsgEndRide(rider string, rideId int64, finalTime int64, finalDistance int64) *MsgEndRide {
	return &MsgEndRide{
		Rider:         rider,
		RideId:        rideId,
		FinalTime:     rideId,
		FinalDistance: finalDistance,
	}
}

// Route ...
func (msg MsgEndRide) Route() string {
	return RouterKey
}

// Type ...
func (msg MsgEndRide) Type() string {
	return "EndRide"
}

// GetSigners ...
func (msg *MsgEndRide) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Rider)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes ...
func (msg *MsgEndRide) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic ...
func (msg *MsgEndRide) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Rider)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
