import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./Components/TodoList";
import {v1} from "uuid";
import {Button} from "./Components/Button";

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
        filteredTasks = tasks.filter(task => task.isDone);
    }
    if (filter === "Active") {
        filteredTasks = tasks.filter(task => !task.isDone);
    }
    const changeFilter = (value: TaskValueType) => {
        setFilter(value);
    }
    // filter

    //add Task
    const addTask = (titleTask: string) => {
        const newTask = {
            id: v1(),
            title: titleTask,
            isDone: false
        }
        setTasks([newTask, ...tasks]);
    }
    //add Task
    //
    // const changeCheckBoxStatus = (taskID: string, newIsDone: boolean) => {
    //     let currentTask = tasks.find((task) => {
    //         return task.id === taskID
    //     })
    //     if (currentTask) {
    //         currentTask.isDone = newIsDone;
    //         setTasks([...tasks]);
    //     }
    // }

    const changeCheckBoxStatus = (taskID: string, taskIsDone: boolean) => {
        let currentTask = tasks.find(task => task.id == taskID);
        if (currentTask) {
            currentTask.isDone = taskIsDone;
            setTasks([...tasks]);
        }
    }

    // передача функций в Todolist
    return (
        <div className='App'>
            <TodoList
                title='What to learn'
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeCheckBoxStatus={changeCheckBoxStatus}
            />
        </div>
    );
}

export default App;
