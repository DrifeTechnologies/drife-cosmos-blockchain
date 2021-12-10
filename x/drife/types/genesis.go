package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		CounterquoteList: []*Counterquote{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in counterquote
	counterquoteIdMap := make(map[uint64]bool)

	for _, elem := range gs.CounterquoteList {
		if _, ok := counterquoteIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for counterquote")
		}
		counterquoteIdMap[elem.Id] = true
	}

	return nil
}
