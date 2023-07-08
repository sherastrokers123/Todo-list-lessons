import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./Components/TodoList";

export type ValueTaskType = "All" | "Active" | "Completed";

function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>(
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "JS", isDone: true}
        ]
    )
    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID));
    }
    // filter
    const [filter,setFilter]=useState("All");
    let filteredTask = tasks;
    if(filter === "Completed"){
        filteredTask = tasks.filter(task=>task.isDone===true)
    }
    if(filter === "Active"){
        filteredTask = tasks.filter(task=>task.isDone===true)
    }
    // filter

    // передача функций в Todolist
    return (
        <div className='App'>
            <TodoList
                title='What to learn'
                tasks={filteredTask}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
