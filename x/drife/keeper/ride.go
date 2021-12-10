// x/blog/keeper/post.go
package keeper

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/drife/x/drife/types"
)

// GetPostCount get the total number of post
func (k Keeper) GetRideCount(ctx sdk.Context) int64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideCountKey))
	byteKey := types.KeyPrefix(types.RideCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseInt(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to int64
		panic("cannot decode count")
	}

	return count
}

// SetPostCount set the total number of post
func (k Keeper) SetRideCount(ctx sdk.Context, count int64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideCountKey))
	byteKey := types.KeyPrefix(types.RideCountKey)
	bz := []byte(strconv.FormatInt(count, 10))
	store.Set(byteKey, bz)
}

func (k Keeper) CreateRide(ctx sdk.Context, msg types.MsgCreateRide) {
	// Create the post
	count := k.GetRideCount(ctx)

	// Calculate Base Fare
	baseFare := (10000 + (21 * msg.InitialDistance) + (20 * msg.InitialTime)) * (100 + msg.BoostPercent) / 100
	var ride = types.Ride{
		Rider:           msg.Rider,
		RideId:          strconv.FormatInt(count, 10),
		EligibleDrivers: msg.EligibleDrivers,
		InitialTime:     msg.InitialTime,
		InitialDistance: msg.InitialDistance,
		BoostPercent:    msg.BoostPercent,
		RideState:       msg.RideState,
		BaseFare:        baseFare,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideKey))
	key := types.KeyPrefix(types.RideKey + ride.RideId)
	value := k.cdc.MustMarshalBinaryBare(&ride)
	store.Set(key, value)

	// Update post count
	k.SetRideCount(ctx, count+1)
}

func (k Keeper) GetRide(ctx sdk.Context, key string) types.Ride {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideKey))
	var post types.Ride
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.RideKey+key)), &post)
	return post
}

func (k Keeper) HasRide(ctx sdk.Context, id string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideKey))
	return store.Has(types.KeyPrefix(types.RideKey + id))
}

func (k Keeper) GetRider(ctx sdk.Context, key string) string {
	return k.GetRide(ctx, key).Rider
}

func (k Keeper) GetAllRide(ctx sdk.Context) (msgs []types.Ride) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideKey))
	iterator := sdk.KVStorePrefixIterator(store, types.KeyPrefix(types.RideKey))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var msg types.Ride
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return
}

func (k Keeper) AddCounterQuote(ctx sdk.Context, msg types.MsgCounterQuote) {

	ride := k.GetRide(ctx, strconv.FormatInt(msg.RideId, 10))

	//TODO Checks
	/**
	1. If driver is eligible driver
	*/

	var counterquote = types.CQ{
		Driver:         msg.Driver,
		PremiumPercent: msg.PremiumPercent,
	}

	ride.Counterquotes = append(ride.Counterquotes, &counterquote)
	//ride.Cq[msg.Driver] = msg.PremiumPercent
	// m := make(ride.Cq)
	// m[msg.Driver] = msg.PremiumPercent
	// fmt.Println("map: ", m)
	// ride.Cq = m
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideKey))
	key := types.KeyPrefix(types.RideKey + ride.RideId)
	value := k.cdc.MustMarshalBinaryBare(&ride)
	store.Set(key, value)

}

func (k Keeper) AcceptRide(ctx sdk.Context, msg types.MsgAcceptRide) {

	ride := k.GetRide(ctx, strconv.FormatInt(msg.RideId, 10))

	//TODO Checks
	/**
	1. If driver is eligible driver
	2. Has Driver counter quoted
	*/
	var driver string
	var chosenPremiumPercent int64
	var found = false
	for _, v := range ride.Counterquotes {
		if v.Driver == msg.Driver {
			driver = v.Driver
			chosenPremiumPercent = v.PremiumPercent
			found = true
			break
		}
	}

	if !found {
		//	return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Driver didnt counterquote"))
	}

	ride.Driver = driver
	ride.ChosenPremiumPercent = chosenPremiumPercent

	ride.EstimatedFare = (10000 + (21 * ride.InitialDistance) + (20 * ride.InitialTime)) * (100 + chosenPremiumPercent) / 100
	ride.RideState = 2

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideKey))
	key := types.KeyPrefix(types.RideKey + ride.RideId)
	value := k.cdc.MustMarshalBinaryBare(&ride)
	store.Set(key, value)

}

func (k Keeper) EndRide(ctx sdk.Context, msg types.MsgEndRide) {

	ride := k.GetRide(ctx, strconv.FormatInt(msg.RideId, 10))

	ride.FinalDistance = msg.FinalDistance
	ride.FinalTime = msg.FinalTime
	ride.FinalFare = (10000 + (21 * msg.FinalDistance) + (20 * msg.FinalTime)) * (100 + ride.GetChosenPremiumPercent()) / 100
	ride.RideState = 6

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideKey))
	key := types.KeyPrefix(types.RideKey + ride.RideId)
	value := k.cdc.MustMarshalBinaryBare(&ride)
	store.Set(key, value)

}
