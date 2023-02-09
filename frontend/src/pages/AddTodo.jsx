import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { apiInstance } from "../shared/utils/api";

const SCHEMA = yup.object({
    title: yup.string().required("Please enter title"),
    description: yup.string(),
});

const AddTodo = () => {
    const navigate = useNavigate();
    const [existingTodoId, setExistingTodoId] = useState(null);
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset,
    } = useForm({
        resolver: yupResolver(SCHEMA),
    });
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            apiInstance
                .get(`/todos/${id}`)
                .then((res) => {
                    setExistingTodoId(res.data._id);
                    setValue("title", res.data.title);
                    setValue("description", res.data.description);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        return () => {
            reset();
        };
    }, [id, reset, setValue]);

    const submitHandler = (formData) => {
        if (existingTodoId) {
            return apiInstance
                .patch(`/todos/${existingTodoId}`, formData)
                .then((res) => {
                    navigate("/");
                })
                .catch(() => {
                    console.log("Some error occured!!!");
                });
        }
        apiInstance
            .post("/todos/add-todo", formData)
            .then((res) => {
                navigate("/");
            })
            .catch(() => {
                console.log("Some error occured!!!");
            });
    };
    return (
        <div>
            <h1>{id ? "Edit" : "Add"} todo</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input {...register("title")} type="text" id="title" />
                    {errors.title && (
                        <span className="error">{errors.title.message}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        {...register("description")}
                        type="text"
                        id="description"
                    />
                </div>
                <div>
                    <button type="submit">{id ? "Save" : "Add Todo"} </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
