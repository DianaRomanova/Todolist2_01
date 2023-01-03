import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const shapka='What to learn'

    const tasks1 =[
        {id:1, title: 'HTLM&CSS', isDone: true},
        {id:2, title: 'JS', isDone: true},
        {id:3, title: 'ReactJS', isDone: false}
    ]
    const tasks2 =[
        {id:1, title: 'Hello world', isDone: true},
        {id:2, title: 'I am Happy', isDone: false},
        {id:3, title: 'Ya', isDone: false},
        {id:4, title: 'Ya', isDone: false}

    ]

    return (
        <div className="App">
            <Todolist shapka={shapka} tasks={tasks1}/>
            <Todolist shapka={shapka} tasks={tasks2}/>




           </div>
    );
}

export default App;
