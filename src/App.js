import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: 'I love Easy Frontend! 😍 ' },
		{ id: 2, title: 'We love Easy Frontend! 🥰 ' },
		{ id: 3, title: 'They love Easy Frontend! 🚀 ' },
	]);

	function handleTodoClick(todo) {
		const index = todoList.findIndex((x) => x.id === todo.id);

		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	}

    function handleTodoFormSubmit(formValues) {
        const newTodo = {
            id: todoList.length + 10,
            ...formValues,
        }
		const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

	return (
		<div className="app">
			<h1>React Hooks - TodoList</h1>
			<TodoForm onSubmit={handleTodoFormSubmit} />
			<TodoList todos={todoList} onTodoClick={handleTodoClick} />
		</div>
	);
}

export default App;
