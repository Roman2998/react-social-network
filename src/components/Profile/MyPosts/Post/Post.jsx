import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.posts}>
			<div className={s.item}>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelPOoLWOuBnaeaw_KtxdrmTR3mPgDKHrawQ&usqp=CAU' />
				{props.message}
				<div>
					<span>like</span> {props.likesCount}
				</div>
			</div>
		</div>
	)
}

export default Post;