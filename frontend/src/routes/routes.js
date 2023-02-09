import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../shared/layouts/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import AddTodo from "../pages/addTodo/AddTodo";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/add-todo",
                element: <AddTodo />,
            },
            {
                path: "/edit-todo/:id",
                element: <AddTodo />,
            },
        ],
    },
]);

export default routes;
