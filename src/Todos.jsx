import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core'
import TodoCard from './TodoCard';

function Todos() {

    const [todos,setTodos] = useState();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            const responseTodos = res.data;
            setTodos(responseTodos);
        });
    },[]);
    
    return (
        <div>
            <h1>Todossss</h1>
            {todos?
            (
                <div>
                    {todos.slice(0,10).map((todo) => ( 
                    <TodoCard key={todo.id} todo={todo} /> 
                    ))}        
                </div>
            ):(
            <CircularProgress/>
            )}
        </div>
    )
}

export default Todos
