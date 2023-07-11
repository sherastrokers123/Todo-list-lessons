import React, {useState} from "react";
import {TaskValueType} from "../App";

// типизация компоненты
type TodoListPropsType = {
    title: string,
    tasks: TasksType[],
    removeTask: (taskID: string) => void,
    changeFilter: (value: TaskValueType) => void,
    addTask: (titleTask: string) => void,
}
// типизация таски
export type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}
export const TodoList = (props: TodoListPropsType) => {

    const [titleTask, setTaskTitle] = useState<string>('');

    const changeFilterAll = () => {
        props.changeFilter('All')
    }
    const changeFilterActive = () => {
        props.changeFilter('Active')
    }
    const changeFilterCompleted = () => {
        props.changeFilter('Completed')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={titleTask}
                       onChange={(e) => {
                           setTaskTitle(e.currentTarget.value)
                       }}
                       onKeyDown={(e) => {
                           if (e.key === "Enter") {
                               props.addTask(titleTask)
                               setTaskTitle('')
                           }
                       }}
                />

                <button onClick={() => {
                    props.addTask(titleTask)
                    setTaskTitle('')
                }}>+
                </button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <button onClick={() => (props.removeTask(task.id))}>x</button>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                {/*<button onClick={() => props.changeFilter('All')}>All</button>*/}
                <button onClick={() => changeFilterAll()}>All</button>
                <button onClick={() => changeFilterActive()}>Active</button>
                <button onClick={() => changeFilterCompleted()}>Completed</button>
            </div>
        </div>
    )
}