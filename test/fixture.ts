/* eslint-disable */
// @ts-nocheck
import { Item, GildedRose } from '../src/gilded-rose'

export function getItem(string, items) {
  const regex = new RegExp(string, 'gi');
  return items.find((item) => regex.test(item.name));
};

export const allItems = [
  // Standard item: -quality, -sellIn
  { name: "+5 Dexterity Vest", sellIn: 10, quality: 20 },
  // Aged Brie: +quality, -sellIn
  { name: "Aged Brie", sellIn: 2, quality: 0 },
  // Elixir of the Mongoose
  { name: "Elixir of the Mongoose", sellIn: 5, quality: 7 },
  // Sulfuras, Hand of Ragnaros
  { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
  { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
  // Backstage pases
  { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 },
  { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 49 },
  { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49 },
  // TODO: Conjured Mana Cake
  { name: "Conjured Mana Cake", sellIn: 3, quality: 6 }
];
