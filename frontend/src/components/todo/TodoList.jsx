import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    const { todoList } = props;
    return (
        <ul>
            {todoList.map((item) => (
                <TodoListItem key={item.id} itemData={item} />
            ))}
        </ul>
    );
};

export default TodoList;
