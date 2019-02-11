import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TodoComponent extends Component {
    componentDidMount = () => {
        const { match, getTodo } = this.props;
        const { params: { id }} = match;
        getTodo(id)
    }
    clickHandler = e => {
        this.props.clearCurrent();
    }
    render(){
        return (
            <>
            {
                this.props.current ? 
                    <div className="row">
                        <div className="col-4 offset-4 border border-dark">
                            <h3>{this.props.current.title}</h3>
                        </div>
                        <div className="col-4 offset-4 border border-dark">
                            <p>{this.props.current.body}</p>
                        </div>
                        <div className="col-4 offset-4 border border-dark">
                            <Link to="/" onClick={this.clickHandler}>BACK</Link>
                        </div>
                    </div>
                    : <></>
            }
                
            </>
        )
    }
}

export default TodoComponent;