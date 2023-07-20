import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TaskValueType} from "../App";
import {Button} from "./Button";

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

    const switchOfFilter = (filterValue: TaskValueType) => { // tsar switch filter
        props.changeFilter(filterValue);
    }
    const removeTaskHandler = (taskID: string) => { // remove func
        props.removeTask(taskID);
    }
    const addTaskHandler = () => {
        props.addTask(titleTask);
        setTaskTitle('');
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value);
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTaskHandler()
        }
    }
    const mappedTasks = props.tasks.map((task) => {

        return (
            <li key={task.id}>
                {/*<button onClick={() => (props.removeTask(task.id))}>x</button>*/}
                {/*<button onClick={() => removeTaskHandler(task.id)}>x</button>*/}
                <Button callBack={() => {
                    removeTaskHandler(task.id)
                }} name={"X"}/>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={titleTask}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                />
                {/*<button onClick={addTaskHandler}>+</button>*/}
                <Button callBack={() => addTaskHandler()} name={"+"}/>
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                {/*<button onClick={() => switchOfFilter('All')}>All</button>*/}
                {/*<button onClick={() => switchOfFilter('Active')}>Active</button>*/}
                {/*<button onClick={() => switchOfFilter('Completed')}>Completed</button>*/}
                <Button callBack={() => switchOfFilter("Completed")} name={"Completed"}/>
                <Button callBack={() => switchOfFilter("Active")} name={"Active"}/>
                <Button callBack={() => switchOfFilter("All")} name={"All"}/>
            </div>
        </div>
    )
}