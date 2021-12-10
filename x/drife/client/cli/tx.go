package cli

import (
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/example/drife/x/drife/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdCreateCounterquote())
	cmd.AddCommand(CmdUpdateCounterquote())
	cmd.AddCommand(CmdDeleteCounterquote())

	cmd.AddCommand(CmdCreateRide())
	cmd.AddCommand(CmdAddCounterQuote())
	cmd.AddCommand(CmdAcceptRide())
	cmd.AddCommand(CmdEndRide())

	return cmd
}

func CmdCreateRide() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-ride [eligibleDrivers] [intialTime] [initialDistance] [boostPercent]",
		Short: "Creates a new Ride",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsEligibleDrivers := strings.Split(args[0], ",") // Split String into array
			argsInitialTime, err1 := strconv.ParseInt(string(args[1]), 10, 64)
			if err1 != nil {
				return err1
			}
			argsInitialDistance, err2 := strconv.ParseInt(string(args[2]), 10, 64)
			if err2 != nil {
				return err2
			}

			argsBoostPercent, err3 := strconv.ParseInt(string(args[3]), 10, 64)

			if err3 != nil {
				return err3
			}
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateRide(clientCtx.GetFromAddress().String(), argsEligibleDrivers, argsInitialTime, argsInitialDistance, argsBoostPercent)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdAddCounterQuote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "counter-quote [rideId] [premiumPercent]",
		Short: "Add a new Counter Quote by Driver",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsRideId, err1 := strconv.ParseInt(string(args[0]), 10, 64)
			if err1 != nil {
				return err1
			}
			argsPremiumPercent, err2 := strconv.ParseInt(string(args[1]), 10, 64)
			if err2 != nil {
				return err2
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCounterQuote(clientCtx.GetFromAddress().String(), argsRideId, argsPremiumPercent)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdAcceptRide() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "accept-ride [rideId] [driver]",
		Short: "Accept a Ride",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {

			argsRideId, err1 := strconv.ParseInt(string(args[0]), 10, 64)
			if err1 != nil {
				return err1
			}
			argsDriver := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAcceptRide(clientCtx.GetFromAddress().String(), argsRideId, argsDriver)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdEndRide() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "end-ride [rideId] [finalTime] [finalDistnace]",
		Short: "Ends a Ride",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {

			argsRideId, err1 := strconv.ParseInt(string(args[0]), 10, 64)
			if err1 != nil {
				return err1
			}
			argsFinalTime, err2 := strconv.ParseInt(string(args[1]), 10, 64)
			if err2 != nil {
				return err2
			}
			argsFinalDistance, err3 := strconv.ParseInt(string(args[2]), 10, 64)
			if err3 != nil {
				return err3
			}
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgEndRide(clientCtx.GetFromAddress().String(), argsRideId, argsFinalTime, argsFinalDistance)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
