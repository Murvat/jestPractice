
import axios from "axios";
import { getTodos } from "../res/getTodos";

const axiosSpy = jest.spyOn(axios, 'get');
const errorSpy = jest.spyOn(console, 'error')


describe("getTodos", () => {
    beforeEach(() => {
        axiosSpy.mockClear()
     });
    afterEach(() => {
        axiosSpy.mockRestore();
     });


    it.todo('should return an empty array in case of error and print error to console', async() => {
        const errorMessage = 'network error';
        const result = await getTodos();
        
        axiosSpy.mockRejectedValueOnce(errorMessage);

        expect(errorSpy).toHaveBeenNthCalledWith(errorMessage);
        expect(result).toEqual([]);
    });
    
    it.todo('should return 200 todos using axius.get', async () => {
        
        const result = await getTodos();
        expect(axiosSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
        expect(result).toHaveLength(200);
    })

 });