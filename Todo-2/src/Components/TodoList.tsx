import React from "react";
// типизация компоненты
type TodoListPropsType = {
    title: string,
    tasks: TasksType[],
    removeTask: (taskID: number) => void
}
// типизация таски
type TasksType = {
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
                            <button onClick={() => (props.removeTask(task.id))}>X</button>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>

            </div>
        </div>
    )
}