import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { apiInstance } from "../../shared/utils/api";
import { getTodo, deleteTodo } from "../../shared/store/slices/todoSlice";

const TodoListItem = (props) => {
    const dispatch = useDispatch();
    const { itemData } = props;

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id));
        // apiInstance
        //     .delete(`/todos/${id}`)
        //     .then((res) => {
        //         console.log("Item deleted");
        //     })
        //     .then(() => {
        //         console.log("Some error occured!!!");
        //     });
    };
    return (
        <li>
            {itemData.title}
            <button onClick={() => deleteHandler(itemData._id)}>delete</button>
            <Link to={`/edit-todo/${itemData._id}`}>edit</Link>
        </li>
    );
};

export default TodoListItem;
