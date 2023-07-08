import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./Components/TodoList";

export type TasksValuesType = "All" | "Active" | "Completed";

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

    let filteredTask = tasks
    let filteringOfTasks = (value: TasksValuesType) => {
        if (value === 'Active') {
            let filteredTask = tasks.filter(task => !task.isDone)
            console.log(filteredTask)
        }
        if (value === 'Completed') {
            let filteredTask = tasks.filter(task => task.isDone)
            console.log(filteredTask)
        }
    }


    // -filter//

    // передача функций
    return (
        <div className='App'>
            <TodoList
                title='What to learn'
                tasks={filteredTask}
                removeTask={removeTask}
                filteringOfTasks={filteringOfTasks}
            />
        </div>
    );
}

export default App;
