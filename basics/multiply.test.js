import { multiply } from "./multiply";

describe('multiply', () => {
    it('should multiply positive numbers', () => {
        const res = multiply(1, 2);
        expect(res).toBe(2);

        expect({ a: 1 }).toEqual({ a: 1 });
        expect([1, 2, 3]).toHaveLength(3);
        expect([1, 2, 3]).toContain(3);
    });

    it('should multiply negative numbers', () => {
        const res = multiply(-1, -2);
        expect(res).toBe(2);
    });

    it('should multiply a negative and a positive number', () => {
        const res = multiply(-1, 2);
        expect(res).toBe(-2);
    });
});
