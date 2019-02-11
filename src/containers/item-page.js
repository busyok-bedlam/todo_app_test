import { connect } from 'react-redux';

import { upgradeTodo, removeTodo } from '../actions/todo-actions';

import ListItem from '../components/list-item';

const mapDispatchToProps = {
    upgradeTodo,
    removeTodo
}
export default connect(null,mapDispatchToProps)(ListItem)