import React from 'react';
import {useParams} from 'react-router-dom';

function Todo() {
    const { id } = useParams();
    return (
        <div>
            <h1>Todo id {id}</h1>
        </div>
    )
}

export default Todo
