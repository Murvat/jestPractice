import { getLength } from "../res/getLength";

describe('getLength', () => { 
    it('Should return 0 if no elemenet', () => {
        const res =  getLength([]);
        expect(res).toBe(0);
    });
     it('Should return 3 if 3 elements', () => {
        const res =  getLength([1,2,3]);
        expect(res).toBe(3);
     });
     it('Should return 5 if 5 elements', () => {
        const res = getLength([1,2,3,4,5]);
        expect(res).toBe(5);
    });
 })