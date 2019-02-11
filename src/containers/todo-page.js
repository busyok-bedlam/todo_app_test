import { connect } from 'react-redux';

import TodoComponent from '../components/todo-component';
import { getTodo } from '../actions/todo-actions';
import { clearCurrent } from '../actions/current-actions';

const mapStateToProps = state => ({
    current: state.current
})
const mapDispatchToProps = { getTodo, clearCurrent }
export default connect(mapStateToProps,mapDispatchToProps)(TodoComponent)