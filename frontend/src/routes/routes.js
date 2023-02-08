import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../shared/layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AddTodo from "../pages/AddTodo";

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
        ],
    },
]);

export default routes;