import {useState} from "react";

const Todo = () => {
    const [todo, setTodo] = useState(['Моя новая задача', 'Моя новая задача',])
    const [task, setNewTask] = useState('')
    const newTask = (e) => {
        setNewTask(e.target.value)
    }
    const addTodo = () => {
        if (task !=='')
        setTodo([...todo, task])
        setNewTask ('')
    }
    const delTodo = () => {
        setTodo(todo.slice(0, -1))
    }
    return (
        <div>
            <input type="text" onChange={newTask} value={task}/>
            <button onClick={addTodo}>Добавить дело</button>
            <button onClick={delTodo}>Удалить дело</button>
            <ul>
                {todo.map((el,index) => (
                    <li>{el}</li>
                ))}
            </ul>
        </div>
    );
};
