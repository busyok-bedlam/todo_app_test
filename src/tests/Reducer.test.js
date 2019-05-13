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

    it('setTodos reducer', () => {
        const initialState = [{id: 1, body: 'Body1', title: 'Title1'}];
        const action = {
            type: "setTodos",
            payload: [ {id: 2, body: 'Body2', title: 'Title2'}, {id: 3, body: 'Body3', title: 'Title3'} ]
        }
        const expectedState = [ {id: 1, body: 'Body1', title: 'Title1'},  {id: 2, body: 'Body2', title: 'Title2'}, {id: 3, body: 'Body3', title: 'Title3'} ];
        expect(todoReducer(initialState, action)).toEqual(expectedState)
    })

    it('deleteTodos reducer', () => {
        const initialState = [ {_id: 1, body: 'Body1', title: 'Title1'},  {_id: 2, body: 'Body2', title: 'Title2'}, {_id: 3, body: 'Body3', title: 'Title3'} ];
        const action = {
            type: "deleteTodos",
        }
        const expectedState = [];
        expect(todoReducer(initialState,action)).toEqual(expectedState);
    })

    it('deleteTodo reducer', () => {
        const initialState = [ {_id: 1, body: 'Body1', title: 'Title1'},  {_id: 2, body: 'Body2', title: 'Title2'}, {_id: 3, body: 'Body3', title: 'Title3'} ];
        const action = {
            type: "deleteTodo",
            payload: 2
        }
        const expectedState = [ {_id: 1, body: 'Body1', title: 'Title1'}, {_id: 3, body: 'Body3', title: 'Title3'} ];
        expect(todoReducer(initialState,action)).toEqual(expectedState);
    })

    it('updateTodo reducer', () => {
        const initialState = [ {_id: 1, body: 'Body1', title: 'Title1'},  {_id: 2, body: 'Body2', title: 'Title2'}, {_id: 3, body: 'Body3', title: 'Title3'} ];
        const action = {
            type: "updateTodo",
            payload: {
                id: 2,
                newData: {
                    body: "NEW BODY",
                    title: "NEW TITLE"
                }
            }
        }
        const expectedState = [ {_id: 1, body: 'Body1', title: 'Title1'},  {_id: 2, body: "NEW BODY", title: "NEW TITLE"}, {_id: 3, body: 'Body3', title: 'Title3'} ];
        expect(todoReducer(initialState,action)).toEqual(expectedState);

    })

    it('Fake reducer', () => {
        const initialState = [{id: 1, body: 'Body1', title: 'Title1'}];
        const action = {
            type: "fAKeToDo"
        }
        expect(todoReducer(action)).toEqual(initialState);
    })


});