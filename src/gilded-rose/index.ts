/* eslint-disable */
// @ts-nocheck

// Utilities
const includes = (name) => (item) => item.name.includes(name)
const isExpired = (n) => n < 0
const identity = (item) => item
const between = (x, y, n) => n > x && n <= y
const moreThan = (x, n) => n > x

// Update quality and sell in
const increaseQualityBy = (n, { quality }) => (quality > 49 ? 50 : quality + n)
const decreaseQualityBy = (n, { quality }) => (quality < 1 ? 0 : quality - n)
const decreaseSellIn = ({ sellIn }) => sellIn - 1

const updateAgedBrieQuality = (item) =>
  item.sellIn < 1 ? increaseQualityBy(2, item) : increaseQualityBy(1, item)

// Update item
const updateItemBy = (n, item) => ({
  ...item,
  quality: increaseQualityBy(n, item),
  sellIn: decreaseSellIn(item),
})

const updateAgedBrie = (item) => ({
  ...item,
  sellIn: decreaseSellIn(item),
  quality: updateAgedBrieQuality(item),
})

const updateBackstagePasses = (item) =>
    between(0, 5, item.sellIn)  ? updateItemBy(3, item)
  : between(5, 10, item.sellIn) ? updateItemBy(2, item)
  : moreThan(10, item.sellIn)   ? updateItemBy(1, item)
  : { ...item, quality: 0, sellIn: decreaseSellIn(item) }

const updateStandardItem = (item) =>
    isExpired(item.sellIn) ? updateItemBy(2, item)
  : { ...item, quality: decreaseQualityBy(1, item), sellIn: decreaseSellIn(item) }

const updateSulfuras = (item) => identity(item)

const updateConjuredItem = (item) => decreaseQualityBy(2, item)

// Item types
const isAgedBrie = (item) => includes('Aged Brie')(item)
const isBackstagePasses = (item) => includes('Backstage passes')(item)
const isSulfuras = (item) => includes('Sulfuras')(item)
const isConjuredItem = (item) => includes('Conjured')(item)

const updateItem = (item) =>
    isAgedBrie(item)        ? updateAgedBrie(item)
  : isConjuredItem(item)    ? updateConjuredItem(item)
  : isBackstagePasses(item) ? updateBackstagePasses(item)
  : isSulfuras(item)        ? updateSulfuras(item)
  : updateStandardItem(item)

export function updateQuality(items) {
  return items.map(updateItem)
}
