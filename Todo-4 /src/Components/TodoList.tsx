import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TaskValueType} from "../App";
import {Button} from "./Button";
import S from '../Todolist.module.css';

// типизация компоненты
type TodoListPropsType = {
    title: string,
    tasks: TasksType[],
    removeTask: (taskID: string) => void,
    changeFilter: (value: TaskValueType) => void,
    addTask: (titleTask: string) => void,
    changeCheckBoxStatus: (taskID: string, taskIsDone: boolean) => void,
}
// типизация таски
export type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}
export const TodoList = (props: TodoListPropsType) => {

    const [titleTask, setTaskTitle] = useState<string>('');
    const [error, setError] = useState(false)

    const switchOfFilter = (filterValue: TaskValueType) => { // tsar switch filter
        props.changeFilter(filterValue);
    }
    const removeTaskHandler = (taskID: string) => { // remove func
        props.removeTask(taskID);
    }
    const addTaskHandler = () => {
        if (titleTask.trim()) {
            props.addTask(titleTask.trim());
            setTaskTitle('');
        } else {
            console.log('asd')
            setError(true)
        }

    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value);
        setError(false)
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTaskHandler()
        }
    }
    const mappedTasks = props.tasks.map((task) => {
       const changeCheckBoxStatusHandler = (event:ChangeEvent<HTMLInputElement>)=>{

       }
        return (
            <li key={task.id}>
                {/*<button onClick={() => (props.removeTask(task.id))}>x</button>*/}
                {/*<button onClick={() => removeTaskHandler(task.id)}>x</button>*/}
                <Button callBack={() => {
                    removeTaskHandler(task.id)
                }} name={"X"}/>
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={()=>props.changeCheckBoxStatus(task.id,task.isDone)}
                />
                <span>{task.title}</span>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    className={error ? S.error : ''}
                    value={titleTask}
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