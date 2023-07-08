import React from "react";
import {TasksValuesType} from "../App";
// типизация компоненты
type TodoListPropsType = {
    title: string,
    tasks: TasksType[],
    removeTask: (taskID: number) => void,
    filteringOfTasks:(value:TasksValuesType)=>void,
}
// типизация таски
export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}
export const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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
                <button onClick={()=>props.filteringOfTasks("All")}>All</button>
                <button onClick={()=>props.filteringOfTasks('Active')}>Active</button>
                <button onClick={()=>props.filteringOfTasks('Completed')}>Completed</button>
            </div>
        </div>
    )
}