// Core
import { useDispatch, useSelector }  from 'react-redux';

// Styles
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';

// Components
import { Comment } from '../Comment';
import { CommentsForm } from '../forms/CommentsForm';

import { postActions } from '../../lib/redux/actions/posts';
import { getPostId } from '../../lib/redux/selectors/posts';

// Helpers
import { formatDate } from '../../helpers/date-fns';

export const Post = ({
    body, author, created, hash, comments,
}) => {
    const dispatch = useDispatch();
    const selectedComment = useSelector(getPostId);

    const handleClick = () => {
        dispatch(postActions.setPostId(hash === selectedComment ? '' : hash));
    };

    const commentsJSX = comments.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));
    const createdTime = formatDate(created);

    return (
        <section className = 'post'>
            <img src = { author.avatar } alt = 'avatar' />
            <a href = '#'>{ author.name }</a>
            <time>{ createdTime }</time>
            <p>{ body }</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div>
                        <span>0</span>
                    </div>
                    <span className = 'icon'>
                        <LikeIcon />
                        Like
                    </span>
                </section>
                <span
                    className = 'comment' onClick = {  handleClick  } >
                    <CommentIcon className = { 'comment-icon' } />
                    { `${comments.length}  comment${comments.length > 0 ? '' : 's'}` }
                </span>
            </div>
            { selectedComment === hash && <><CommentsForm /> { commentsJSX }</> }
        </section>
    );
};
