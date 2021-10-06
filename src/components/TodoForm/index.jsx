import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
	onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
	onSubmit: null,
};

function TodoForm({ onSubmit }) {
	const [value, setValue] = useState('');

	function handleChangeValue(e) {
		setValue(e.target.value);
	}

	function handleSubmit(e) {
		// Prevent reload browser
		e.preventDefault();

		if (!onSubmit) return;

		const formValues = {
			title: value,
		};
        
		onSubmit(formValues);
		setValue('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={value} onChange={handleChangeValue} />
		</form>
	);
}

export default TodoForm;
