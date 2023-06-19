import React from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";

function App() {

    const title = 'What to learn-1';
    const title2 = 100200;
    const title3 = true;

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    return (
        <div className="App">
            <Todolist tasks = {tasks1} title={title}/>
            <Todolist tasks={tasks2} title={title}/>
        </div>
    );
}

export default App;
