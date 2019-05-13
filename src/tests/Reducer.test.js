import todoReducer from '../reducers/todo';

describe('Reducer tests', () => {
    it('setTodo reducer', () => {
        const initialState = [{id: 2, body: 'Body2', title: 'Title2'}];
        const action = {
            type: "setTodo",
            payload: {
                id: 1,
                body: 'Body1',
                title: 'Title1'
            }
        }
        const expectedState = [{id: 2, body: 'Body2', title: 'Title2'}, {id: 1, body: 'Body1', title: 'Title1'}]
        expect(todoReducer(initialState, action)).toEqual(expectedState)
    })
});