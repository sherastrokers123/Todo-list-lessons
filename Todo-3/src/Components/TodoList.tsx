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
    const [titleTask, setTitleTask] = useState<string>('');
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={titleTask}
                       onChange={(e) => {
                           setTitleTask(e.currentTarget.value)
                       }}
                      onKeyDown={(e)=>{
                          if(e.key === "Enter"){
                              props.addTask(titleTask);
                              setTitleTask('');
                          }
                      }}
                />

                <button onClick={() => {
                    props.addTask(titleTask);
                    setTitleTask('');
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
                <button onClick={() => props.changeFilter('All')}>All</button>
                <button onClick={() => props.changeFilter('Active')}>Active</button>
                <button onClick={() => props.changeFilter("Completed")}>Completed</button>
            </div>
        </div>
    )
}