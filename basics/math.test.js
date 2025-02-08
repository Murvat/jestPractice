import exp from "constants";
import { divide, multiply, sum } from "./math";
const data =
describe('math', () => {
    describe('divide', () => {
        it.each([{ inputA: 6, inputB: 3, expected: 2 },
        { inputA: 12, inputB: 3, expected: 4 },
        { inputA: 100, inputB: 10, expected: 10 },
        { inputA: 10, inputB: 0, expected: Infinity },])('Should match', ({inputA,inputB,expected}) => {
            
            const res = divide(inputA, inputB);
            expect(res).toBe(expected)
        })
        
    });
    describe('multiply', () => {
        it('should me multiply for positive nums', () => {
            const actualRes = multiply(2, 3);
            const expectedRes = 6;
            expect(actualRes).toBe(expectedRes)
        })
        
    });
    describe('sum', () => {
        it('match sum', () => {
            const actualRes = sum(3, 5);
            const expectedRes = 8;
            expect(actualRes).toBe(expectedRes)
        })

    });
})