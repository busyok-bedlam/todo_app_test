import React from 'react';

const SendForm = ({ addTodo }) => {
    let input = null;
    let textarea = null;
    const bothValues = (title,body) => title && body && {title,body} || null;
    const submitHandler = e => {
        e.preventDefault();
        const title = input.value;
        const body = textarea.value;
        bothValues(title,body) && addTodo(bothValues(title,body));
        input.value = "";
        textarea.value = "";

    }
    return (
        <form onSubmit={submitHandler}>

            <div className="form-group input-group mt-5">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="YOUR TITLE" 
                    aria-label="YOUR TITLE" 
                    aria-describedby="YOUR TITLE"
                    ref={ node => input = node }
                    required
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className="form-group" >
                <textarea 
                    required
                    className="form-control" 
                    rows="3" 
                    placeholder="DESCRIPTION" 
                    ref={ node => textarea = node }    
                />
            </div>
        </form>
    )
}
export default SendForm;