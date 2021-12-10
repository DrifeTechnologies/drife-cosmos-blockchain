package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/example/drife/x/drife/types"
)

func CmdCreateCounterquote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-counterquote [premiumPercent] [rideId]",
		Short: "Create a new counterquote",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPremiumPercent, err := cast.ToInt64E(args[0])
			if err != nil {
				return err
			}
			argsRideId, err := cast.ToInt64E(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCounterquote(clientCtx.GetFromAddress().String(), argsPremiumPercent, argsRideId)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCounterquote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-counterquote [id] [premiumPercent] [rideId]",
		Short: "Update a counterquote",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsPremiumPercent, err := cast.ToInt64E(args[1])
			if err != nil {
				return err
			}

			argsRideId, err := cast.ToInt64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCounterquote(clientCtx.GetFromAddress().String(), id, argsPremiumPercent, argsRideId)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCounterquote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-counterquote [id]",
		Short: "Delete a counterquote by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCounterquote(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
