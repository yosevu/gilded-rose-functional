/* eslint-disable */
// @ts-nocheck

import { allItems, getItem } from './fixture';
import { createGildedRose, doTimes, run, updateItems } from './utility';

describe('updateQuality', function() {
  const { items, updateQuality } = createGildedRose(allItems);

  describe('Standard item', () => {
    it('returns a positive or zero quality value.', () => {
      const updatedItems = doTimes(7, () => updateItems(updateQuality, items));
      const vest = getItem('elixir', updatedItems);

      expect(vest.quality).toEqual(0);
    });

    it('has a maximum quality value of 50.', () => {
      const updatedItems = doTimes(20, () => updateItems(updateQuality, items));
      const agedBrie = getItem('aged brie', updatedItems);

      expect(agedBrie.quality).toEqual(50);
    });
  });

  // describe('when the sell_in is below 0', () => {
  //   it('reduces the quality by 2', () => {
  //   });
  // });

  // describe('when updating Aged Brie', () => {
  //   it('increases the quality by 1', () => {
  //   });
  // });

  // describe('when the sell_in is below 0', () => {
  //   it('decreases the quality by 2', () => {
  //   });
  // });

  // describe('when updating Sulfuras', () => {
  //   it('quality remains at 80', () => {
  //   });
  // });

  // describe('when updating a backstage pass', () => {
  //   describe('when the sell_in is larger than 10', () => {
  //     it('increases the quality by 1', () => {
  //     });
  //   });
  //   describe('when the sell_in is 10 or less', () => {
  //     it('increases the quality by 2', () => {
  //     });
  //   });
  //   describe('when the sell_in is 5 or less', () => {
  //     it('increases the quality by 3', () => {
  //     });
  //   });
  //   describe('when the sell_in is 0 or less', () => {
  //     it('reduces the quality to 0', () => {
  //     });
  //   });
  // });

  // describe('when updating a Conjured item', () => {
  //   it('always reduces quality by 2', () => {
  //   });
  // });
});