import { createTodo, createTodoOnServer } from "../createTodo";
import { mockTodo } from '.././__mocks__/todos.mock';
import { create } from "domain";
import exp from "constants";

const mockedV4 = jest.fn(() => 'abcd');

jest.mock('uuid', () => ({
    ...jest.requireActual('uuid'),
    v4:()=>mockedV4()
}));

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTodo)
    }));

describe('createTodo', () => {
    it('should return todo object with provided title, completed and id', () => {
        const title = 'learn jest';
        const expectedResult = { title, competed: false, id: 'abcd' };
        
        const result = createTodo();
        expect(mockedV4).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });

    it('should throw an error when no valid title is provided', () => {
        try {
            createTodo('');
        } catch (err) {
            expect(err.message).toBe('title is required!');
            done();
        }
    });
    
    it('should create a todo on server', async () => {
        const result = await createTodoOnServer('my todo');
        
        expect(result).toEqual(mockTodo);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
    
    it('should throw an error if there is a network error', () => {
        fetch.mockResolvedValueOnce({ ok: false });
        const fnToThrow = () => createTodoOnServer('my todo');

        expect(fnToThrow).rejects.toThrow('Cannot create todo');
        
    })
})