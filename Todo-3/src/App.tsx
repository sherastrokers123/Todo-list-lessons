import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./Components/TodoList";
import {v1} from "uuid";

export type TaskValueType = "All" | "Active" | "Completed";

function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>(
        [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "Angular", isDone: false},
        ]
    )
    const removeTask = (taskID: string) => {
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
    //add Task
    const addTask = (title:string) => {
        const newTask:TasksType={ // шаблон новой таски
            id:v1(),
            title:title,
            isDone:false
        }
        setTasks([newTask,...tasks]) // отрисовка
    }
    //add Task
    // передача функций в Todolist
    return (
        <div className='App'>
            <TodoList
                title='What to learn'
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
