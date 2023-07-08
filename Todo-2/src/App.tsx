import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./Components/TodoList";

function App() {

    let [tasks,setTasks] = useState(
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "JS", isDone: true}
        ]
    )

    const removeTask = (taskID: number) => {
        tasks = tasks.filter(task => task.id !== taskID)
        setTasks(tasks);
    }

    return (
        <div className='App'>
            <TodoList
                title='What to learn'
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;