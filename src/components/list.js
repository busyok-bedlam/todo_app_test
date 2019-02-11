import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListItem from '../containers/item-page';
import FormPage from '../containers/form-page';

class List extends Component {
    componentDidMount(){
        this.props.getTodos();
    }
    render(){
        const { todos } = this.props;
        return (
            <>
                <div style={{height: "50vh", overflowY: "scroll"}} >
                {
                    todos.map((item,index) => <ListItem key={index} data={item}/>)
                }
                </div>
                <FormPage />
            </>
            
        )
    }
}

export default List