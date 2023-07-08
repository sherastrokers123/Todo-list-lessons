import React from 'react';
import './App.css';
import {TodoList} from "./Components/TodoList";

function App() {

    let tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "JS", isDone: true}
    ]



    return (
        <div className='App'>
            <TodoList
                title='What to learn'
                tasks={tasks}
            />
        </div>
    );
}

export default App;
