import React, { useState, useEffect } from "react";

import TodoList from "../components/todo/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../shared/store/slices/todoSlice";

const HomePage = () => {
    const todoList = useSelector((state) => state.todoList.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch]);

    console.log("todolist", todoList);

    if (!todoList) {
        return <h1>Loading...</h1>;
    }
    return (
        <div>
            <h1>Todo</h1>
            <TodoList todoList={todoList} />
        </div>
    );
};

export default HomePage;
