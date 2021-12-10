package types

const (
	// ModuleName defines the module name
	ModuleName = "drife"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_drife"

	// this line is used by starport scaffolding # ibc/keys/name
	// RideKey defines the post value store key
	RideKey = "Ride-value-"

	// RideCountKey defines the post count store key
	RideCountKey = "Ride-count-"
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	CounterquoteKey      = "Counterquote-value-"
	CounterquoteCountKey = "Counterquote-count-"
)
