package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/drife/x/drife/types"
	"strconv"
)

// GetCounterquoteCount get the total number of TypeName.LowerCamel
func (k Keeper) GetCounterquoteCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteCountKey))
	byteKey := types.KeyPrefix(types.CounterquoteCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetCounterquoteCount set the total number of counterquote
func (k Keeper) SetCounterquoteCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteCountKey))
	byteKey := types.KeyPrefix(types.CounterquoteCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendCounterquote appends a counterquote in the store with a new id and update the count
func (k Keeper) AppendCounterquote(
	ctx sdk.Context,
	counterquote types.Counterquote,
) uint64 {
	// Create the counterquote
	count := k.GetCounterquoteCount(ctx)

	// Set the ID of the appended value
	counterquote.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&counterquote)
	store.Set(GetCounterquoteIDBytes(counterquote.Id), appendedValue)

	// Update counterquote count
	k.SetCounterquoteCount(ctx, count+1)

	return count
}

// SetCounterquote set a specific counterquote in the store
func (k Keeper) SetCounterquote(ctx sdk.Context, counterquote types.Counterquote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteKey))
	b := k.cdc.MustMarshalBinaryBare(&counterquote)
	store.Set(GetCounterquoteIDBytes(counterquote.Id), b)
}

// GetCounterquote returns a counterquote from its id
func (k Keeper) GetCounterquote(ctx sdk.Context, id uint64) types.Counterquote {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteKey))
	var counterquote types.Counterquote
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCounterquoteIDBytes(id)), &counterquote)
	return counterquote
}

// HasCounterquote checks if the counterquote exists in the store
func (k Keeper) HasCounterquote(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteKey))
	return store.Has(GetCounterquoteIDBytes(id))
}

// GetCounterquoteOwner returns the creator of the
func (k Keeper) GetCounterquoteOwner(ctx sdk.Context, id uint64) string {
	return k.GetCounterquote(ctx, id).Creator
}

// RemoveCounterquote removes a counterquote from the store
func (k Keeper) RemoveCounterquote(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteKey))
	store.Delete(GetCounterquoteIDBytes(id))
}

// GetAllCounterquote returns all counterquote
func (k Keeper) GetAllCounterquote(ctx sdk.Context) (list []types.Counterquote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CounterquoteKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Counterquote
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCounterquoteIDBytes returns the byte representation of the ID
func GetCounterquoteIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCounterquoteIDFromBytes returns ID in uint64 format from a byte array
func GetCounterquoteIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
