import React from "react";

// типизация компоненты
type TodoListPropsType = {
    title: string,
    tasks: TasksType[],
    removeTask: (taskID: number) => void,
    filteringOfTasks:()=>void,
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
                <button onClick={()=>(props.filteringOfTasks())}>All</button>
                <button onClick={()=>(props.filteringOfTasks())}>Active</button>
                <button onClick={()=>(props.filteringOfTasks())}>Completed</button>
            </div>
        </div>
    )
}