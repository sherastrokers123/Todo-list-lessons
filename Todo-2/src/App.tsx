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

    let filteredTasks = tasks.filter(task=> task.isDone)

    const filteringOfTasks = (value: TasksValuesType) => {
        console.log(value);
    }
    // -filter//

    // передача функций
    return (
        <div className='App'>
            <TodoList
                title='What to learn'
                tasks={tasks}
                removeTask={removeTask}
                filteringOfTasks={filteringOfTasks}
            />
        </div>
    );
}

export default App;
