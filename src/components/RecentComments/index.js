// Core
import { Link } from 'react-router-dom';

// Helpers
import { formatDate } from '../../helpers/date-fns';
import { fetchify } from '../../helpers/fetchify';

// Hooks
import { useRecentComments } from '../../hooks/useRecentComments';

const RecentComment = ({
    body, author, created, post,
}) => {
    const createdTime = formatDate(created);

    return (
        <div className = 'comment'>
            <p className = 'name'>{ author.name }</p>
            <time>{ createdTime }</time>
            <p className = 'body'>{ body }</p>
            <Link to = { post.hash }>Больше комментариев к посту</Link>
        </div>
    );
};

export const RecentComments = () => {
    const { data, isFetched } = useRecentComments();

    const commentJSX = data.map((comment) => (
        <RecentComment key = { comment.hash } { ...comment } />
    ));

    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>Популярные комментарии</h1>;
            <ul>
                { fetchify(isFetched, commentJSX) }
            </ul>
        </div>
    );
};

