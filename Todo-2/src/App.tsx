import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./Components/TodoList";

export type TaskValueType = "All" | "Active" | "Completed";

function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>(
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "JS", isDone: true},
            {id: 5, title: "Angular", isDone: false},
        ]
    )
    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID));
    }
    // filter
    let [filter, setFilter] = useState<TaskValueType>("All")
    let filteredTasks = tasks;

    if (filter === 'All') {
        filteredTasks = tasks;
    }
    if (filter === "Completed") {
        filteredTasks = tasks.filter(task => task.isDone === true)
    }
    if (filter === "Active") {
        filteredTasks = tasks.filter(task => !task.isDone === true)
    }
    const changeFilter = (value: TaskValueType) => {
        setFilter(value);
    }
    // filter
    // передача функций в Todolist
    return (
        <div className='App'>
            <TodoList
                title='What to learn'
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
