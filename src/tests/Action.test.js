import * as todoActions from '../actions/todo-actions';
import itemPage from '../containers/item-page';

describe('action tests', () => {
    it('setTodo action test', () => {
        const payload = {
            id: 1,
            body: 'Body',
            title: 'Title1'
        }
        const expectedAction = {
            type: 'setTodo',
            payload,
        }

        expect(todoActions.setTodo(payload)).toEqual(expectedAction)
    })

    it('setTodos action test', () => {
        const payload = [ {id: 2, body: 'Body1', title: 'Title1'}, { id: 1, body: 'Body2', title: 'Title2' } ]
        const expectedAction = {
            type: 'setTodos',
            payload
        }
        expect(todoActions.setTodos(payload)).toEqual(expectedAction)
    })

    it('deleteTodos action test', () => {
        const expectedAction = {
            type: 'deleteTodos',
        }
        expect(todoActions.deleteTodos()).toEqual(expectedAction);
    })
})