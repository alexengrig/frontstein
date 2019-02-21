const _ = require('lodash');

describe('Lodash', () => {
  describe('Array', () => {
    it('_.chunk(array, [size=1]) - split array into group by size', () => {
      let expected = _.chunk(['a', 'b', 'c', 'd'], 2);
      let actual = [['a', 'b'], ['c', 'd']];
      expect(actual).toEqual(expected);

      expected = _.chunk(['a', 'b', 'c', 'd'], 3);
      actual = [['a', 'b', 'c'], ['d']];
      expect(actual).toEqual(expected);
    });
  });
});
