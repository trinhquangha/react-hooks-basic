import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
	posts: PropTypes.array,
};

PostList.defaultProps = {
	posts: [],
};

function PostList({ posts }) {
	return (
		<ul className="post-list">
			{posts.map((post) => (
				<li key={post.id}>{post.name}</li>
			))}
		</ul>
	);
}

export default PostList;
