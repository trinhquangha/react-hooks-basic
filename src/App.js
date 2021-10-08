import React, { useEffect, useState } from 'react';
import './App.scss';
import queryString from 'query-string';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

function App() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: 'I love Easy Frontend! 😍 ' },
		{ id: 2, title: 'We love Easy Frontend! 🥰 ' },
		{ id: 3, title: 'They love Easy Frontend! 🚀 ' },
	]);

	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1,
	});

	const [filters, setFilters] = useState({
		_page: 1,
		_limit: 10,
	});

	const [postList, setPostList] = useState([]);
	useEffect(() => {
		async function fetchPostList() {
			try {
				const paramsString = queryString.stringify(filters);
				const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
				const response = await fetch(requestUrl);
				const responseJSON = await response.json();
				console.log(responseJSON);

				const { data, pagination } = responseJSON;
				setPostList(data);
				setPagination(pagination);
			} catch (error) {
				console.error('Fail to fetch post list:', error.message);
			}
		}

		fetchPostList();
	}, [filters]);

	function handlePageChange(newPage) {
		console.log(newPage);
		setFilters({
			...filters,
			_page: newPage,
		});
	}

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
		};
		const newTodoList = [...todoList];
		newTodoList.push(newTodo);
		setTodoList(newTodoList);
	}

	return (
		<div className="app">
			{/* <h1>React Hooks - TodoList</h1> */}
			{/* <TodoForm onSubmit={handleTodoFormSubmit} />
			<TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

			<h1>React Hooks - PostList</h1>
			<PostList posts={postList} />
			<Pagination pagination={pagination} onPageChange={handlePageChange} />
		</div>
	);
}

export default App;
