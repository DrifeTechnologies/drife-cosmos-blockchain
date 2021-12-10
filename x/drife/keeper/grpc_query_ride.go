// x/block/keeper/grpc_query_ride.go
package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/example/drife/x/drife/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RideAll(c context.Context, req *types.QueryAllRideRequest) (*types.QueryAllRideResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var rides []*types.Ride
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	rideStore := prefix.NewStore(store, types.KeyPrefix(types.RideKey))

	pageRes, err := query.Paginate(rideStore, req.Pagination, func(key []byte, value []byte) error {
		var ride types.Ride
		if err := k.cdc.UnmarshalBinaryBare(value, &ride); err != nil {
			return err
		}

		rides = append(rides, &ride)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRideResponse{Ride: rides, Pagination: pageRes}, nil
}

func (k Keeper) Ride(c context.Context, req *types.QueryGetRideRequest) (*types.QueryGetRideResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ride types.Ride
	ctx := sdk.UnwrapSDKContext(c)

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RideKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.RideKey+req.Id)), &ride)

	return &types.QueryGetRideResponse{Ride: &ride}, nil
}
