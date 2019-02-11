import { connect } from 'react-redux';

import TodoComponent from '../components/todo-component';
import { getTodo } from '../actions/todo-actions';

const mapDispatchToProps = { getTodo }
export default connect(null,mapDispatchToProps)(TodoComponent)