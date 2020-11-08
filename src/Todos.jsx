import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core'

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
                    {todos.map(todo => {
                          const {title,completed,id} = todo;
                          return(
                              <div key={id}>
                                  <h4 >{title}</h4>
                                  <h5 >{`Completed:${completed}`}</h5>
                              </div>
                          )
                    })}        
                </div>
            )
            :<CircularProgress/>}
        </div>
    )
}

export default Todos
