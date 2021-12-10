package drife

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/drife/x/drife/keeper"
	"github.com/example/drife/x/drife/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the counterquote
	for _, elem := range genState.CounterquoteList {
		k.SetCounterquote(ctx, *elem)
	}

	// Set counterquote count
	k.SetCounterquoteCount(ctx, genState.CounterquoteCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all counterquote
	counterquoteList := k.GetAllCounterquote(ctx)
	for _, elem := range counterquoteList {
		elem := elem
		genesis.CounterquoteList = append(genesis.CounterquoteList, &elem)
	}

	// Set the current count
	genesis.CounterquoteCount = k.GetCounterquoteCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
