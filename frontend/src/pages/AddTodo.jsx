import React from "react";

const AddTodo = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <h1>Add todo</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" />
                </div>
                <div>
                    <button type="submit">Add todo</button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
