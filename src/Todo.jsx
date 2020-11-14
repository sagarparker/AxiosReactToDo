import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function Todo() {
    const { id } = useParams();
    const [todoDetails,setTodoDetails] = useState();

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
            const responseTodos = res.data;
            setTodoDetails(responseTodos);
        });
    },[]);
    const {id:todoId,userId,title,completed} = todoDetails || {};
    return (
        <div>
            <h1>Todo ID : {todoId}</h1>
            <h1>Todo userID : {userId}</h1>
            <h1>Todo title : {title}</h1>
            <h1>Todo completed : {completed}</h1>
        </div>
    )
}

export default Todo
