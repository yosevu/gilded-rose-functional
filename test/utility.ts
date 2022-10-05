/* eslint-disable */
// @ts-nocheck

export function updateQualityWithContext(updateQuality, items) {
  const context = { items, updateQuality }

  context.updateQuality(items)

  return context.items
}

// Calls `fn` `n` times and updates a copy of items each iteration
// Try to update items with the `fn` argument and if this failes add an object context to update the items.
export function updateTimes(fn, n, items) {
  try {
    return [...Array(n)].reduce((previousItems, _) => {
      return fn(previousItems)
    }, items)
  } catch (error) {
    return [...Array(n)].reduce((previousItems, _) => {
      return updateQualityWithContext(fn, previousItems)
    }, items)
  }
}
