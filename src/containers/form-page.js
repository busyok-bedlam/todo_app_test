import { connect } from 'react-redux';

import SendForm from '../components/form';
import { addTodo } from '../actions/todo-actions';

const mapDispatchToProps = { addTodo }
export default connect(null,mapDispatchToProps)(SendForm)