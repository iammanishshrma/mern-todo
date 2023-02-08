import React, { useState, useEffect } from "react";

import TodoList from "../components/todo/TodoList";
import { apiInstance } from "../shared/utils/api";

const DUMMY_TODO = [
    {
        title: "a book",
        id: "t1",
        createdAt: new Date(),
    },
    {
        title: "a phone",
        id: "t2",
        createdAt: new Date(),
    },
    {
        title: "a bike",
        id: "t3",
        createdAt: new Date(),
    },
];

const HomePage = () => {
    const [todoList, setTodoList] = useState(null);

    useEffect(() => {
        apiInstance
            .get("/todos")
            .then((res) => {
                setTodoList(res.data.todos);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
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
