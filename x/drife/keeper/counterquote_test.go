package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/drife/x/drife/types"
	"github.com/stretchr/testify/assert"
)

func createNCounterquote(keeper *Keeper, ctx sdk.Context, n int) []types.Counterquote {
	items := make([]types.Counterquote, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendCounterquote(ctx, items[i])
	}
	return items
}

func TestCounterquoteGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCounterquote(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetCounterquote(ctx, item.Id))
	}
}

func TestCounterquoteExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCounterquote(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasCounterquote(ctx, item.Id))
	}
}

func TestCounterquoteRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCounterquote(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCounterquote(ctx, item.Id)
		assert.False(t, keeper.HasCounterquote(ctx, item.Id))
	}
}

func TestCounterquoteGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCounterquote(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllCounterquote(ctx))
}

func TestCounterquoteCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCounterquote(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetCounterquoteCount(ctx))
}
