import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import TodoList from "../../components/todo/TodoList";
import { getTodo } from "../../shared/store/slices/todoSlice";
import "./HomePage.css";

const HomePage = () => {
    const todoList = useSelector((state) => state.todoList.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch]);

    if (!todoList) {
        return <h1>Loading...</h1>;
    }
    return (
        <section className="home-page">
            <h1 className="home-page__heading">Todo</h1>
            <TodoList todoList={todoList} />
        </section>
    );
};

export default HomePage;
