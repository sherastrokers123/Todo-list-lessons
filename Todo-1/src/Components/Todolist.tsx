import React from "react";type TasksPropsType = {    id: number,    title: string,    isDone: boolean}type PropsType = {    title:string    title2?: number    title3?: boolean    tasks:TasksPropsType[]}export const Todolist = (props:PropsType)=> {return (    <div>        <h3>{props.title}</h3>        <h3>{props.title2}</h3>        <div>            <input />            <button>+</button>        </div>        <ul>            {props.tasks.map((task)=>{               return (                   <li key={task.id}>                       <input type="checkbox" checked={task.isDone} />                       <span>{task.title}</span>                   </li>               )            })}        </ul>        <div>            <button>All</button>            <button>Active</button>            <button>Completed</button>        </div>    </div>    )}