import {
    connect
} from 'react-redux';
import { getTodos } from '../actions/todo-actions';

import List from '../components/list';

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = {
    getTodos
}
export default connect(mapStateToProps,mapDispatchToProps)(List)