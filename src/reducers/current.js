import {
    handleActions
} from 'redux-actions';
import * as currentActions from '../actions/current-actions';
const initialState = null;

const currentReducer = handleActions({
    [currentActions.setCurrent]: (state, {
        payload
    }) => payload,
    [currentActions.clearCurrent]: (state) => null
}, initialState)

export default currentReducer;