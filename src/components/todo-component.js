import React, {Component} from 'react';

class TodoComponent extends Component {
    componentDidMount = () => {
        const { match } = this.props;
        const { params: { id }} = match;
        console.log(id)
    }
    render = () => {
        return (
            <div></div>
        )
    }
}

export default TodoComponent;