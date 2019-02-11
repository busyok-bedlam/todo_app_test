import React,{ Component } from 'react';


class ListItem extends Component {
    input = React.createRef();
    state = {
        edit: false,
        inputValue: '',
        oldValue: ''
    }
    toggleEdit = e => {
        e.preventDefault();
        const { data: { title }} = this.props;
        this.setState({ edit: !this.state.edit, inputValue: title, oldValue: title })
    }
    toggleDone = (e) => {
        const { data, upgradeTodo } = this.props;
        const { _id, done } = data;
        upgradeTodo({ id: _id, newData: { done: !done}})
    }
    changeHandler = e => {
        e.preventDefault();
        const { value } = this.input;
        this.setState({ inputValue: value })
    }
    blurHandler = () => {
        const { inputValue } = this.state;
        const { data: {_id}, upgradeTodo } = this.props;
        if(!!inputValue){
            this.setState({ edit : !this.state.edit });
            upgradeTodo({ id: _id, newData: { title: inputValue }})
        } else {
            this.setState({ edit : !this.state.edit,inputValue: this.state.oldValue})
        }
        
        
    }
    keyPressHandler = e => {
        console.log(e.keyCode);
        const { keyCode } = e;
        if(keyCode === 13 || keyCode === 27) {
            this.blurHandler();
        }
    }
    deleteHandler = e => {
        e.preventDefault();
        const { data: {_id}, removeTodo } = this.props;
        removeTodo({ id: _id})
    }
    render = () => {
        const { data: {_id, title, body,done} } = this.props;
        const { edit, inputValue } = this.state;
        return (
            <>
                <li className="list-group-item d-flex align-items-center justify-content-start border border-dark">
                    <input className="mr-3" type="checkbox" checked={!!done} onChange={this.toggleDone} />
                    <button type="button" className="mr-3 btn btn-info" onClick={this.toggleEdit}>
                        <i className="fas fa-edit"></i>
                    </button>

                    <button type="button" onClick={this.deleteHandler} className="mr-3 btn btn-danger">
                        <i className="fas fa-times"></i>
                    </button>
                    {
                        !edit ? <button type="button" className="btn btn-light">{title}</button> 
                        : <input 
                            value={inputValue} 
                            onChange={this.changeHandler} 
                            onBlur={this.blurHandler}
                            onKeyDown={this.keyPressHandler}
                            ref={node => this.input = node}
                            autoFocus={true}
                        />
                    }
                    
                    
                </li>
            </>
        )
    }
}

export default ListItem;