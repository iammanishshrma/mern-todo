import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    const { todoList } = props;
    return (
        <ul className="home-page__todo-list">
            {todoList.map((item) => (
                <TodoListItem key={item._id} itemData={item} />
            ))}
        </ul>
    );
};

export default TodoList;
