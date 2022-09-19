/* eslint-disable */
// @ts-nocheck

import { GildedRose } from '../src/gilded-rose';

export function createGildedRose(items) {
  return new GildedRose(items);
}

export function updateItems(updateQuality, items) {
  const context = { items, updateQuality };

  context.updateQuality(items);

  return context.items;
}

export function doTimes(times, fn) {
  return [...Array(times)].map((_, index) => {
    // console.log(`${index + 1}`);
    return fn();
  })[times - 1];
}
