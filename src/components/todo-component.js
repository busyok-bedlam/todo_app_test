import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TodoComponent extends Component {
    componentDidMount = () => {
        const { match, getTodo } = this.props;
        const { params: { id }} = match;
        getTodo(id)
    }
    render(){
        return (
            <div>
                <div>HELLO</div>
                <Link to="/">BACK</Link>
            </div>
        )
    }
}

export default TodoComponent;