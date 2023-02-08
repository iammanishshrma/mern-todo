import React from "react";

const TodoListItem = (props) => {
    const { itemData } = props;
    return (
        <li>
            {itemData.title} <button>delete</button> <button>edit</button>
        </li>
    );
};

export default TodoListItem;
