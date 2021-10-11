import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
	onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
	onSubmit: null,
};

function PostFiltersForm({ onSubmit }) {
	const [searchTerm, setSearchTerm] = useState('');
	const typingTimeoutRef = useRef(null);

	const handleSearchTermChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);

		if (typingTimeoutRef.current) {
			clearTimeout(typingTimeoutRef.current);
		}

		if (!onSubmit) return;

		typingTimeoutRef.current = setTimeout(() => {
			const formValues = {
				searchTerm: value,
			};
			onSubmit(formValues);
		}, 500);
	};

	return (
		<form>
			<input type="text" value={searchTerm} onChange={handleSearchTermChange} />
		</form>
	);
}

export default PostFiltersForm;
