"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
describe('merge', () => {
    it('should merge and sort 3 arrays correctly', () => {
        const collection_1 = [1, 2, 5];
        const collection_2 = [3, 4, 6];
        const collection_3 = [9, 8, 7];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it('should return an empty array if all collections are empty', () => {
        const result = (0, merge_1.merge)([], [], []);
        expect(result).toEqual([]);
    });
    it('should merge arrays with different sizes correctly', () => {
        const collection_1 = [1, 2];
        const collection_2 = [3, 4, 5];
        const collection_3 = [8, 7, 6];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});
