import { merge } from './merge';

describe('merge', () => {
  it('should merge and sort 3 arrays correctly', () => {
    const collection_1 = [1, 2, 5];
    const collection_2 = [3, 4, 6];
    const collection_3 = [9, 8, 7];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should return an empty array if all collections are empty', () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  it('should merge arrays with different sizes correctly', () => {
    const collection_1 = [1, 2];
    const collection_2 = [3, 4, 5];
    const collection_3 = [8, 7, 6];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should merge arrays with different orders and same size correctly', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 8, 7];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle arrays with duplicate values correctly', () => {
    const collection_1 = [1, 2, 2, 5];
    const collection_2 = [3, 3, 6];
    const collection_3 = [7, 7, 7];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 2, 3, 3, 5, 6, 7, 7, 7]);
  });

  it('should merge and sort arrays with single elements correctly', () => {
    const collection_1 = [3];
    const collection_2 = [1];
    const collection_3 = [2];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle an empty array among non-empty arrays correctly', () => {
    const collection_1 = [1, 2, 3];
    const collection_3 = [6, 5, 4];
    const result = merge(collection_1, [], collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle pre-sorted arrays correctly', () => {
    const collection_1 = [1, 2, 3];
    const collection_2 = [4, 5, 6];
    const collection_3 = [7, 8, 9];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
