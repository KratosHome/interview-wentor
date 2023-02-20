// Core
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Helpers
import { formatDate } from '../../helpers/date-fns';
import { fetchify } from '../../helpers/fetchify';

// Hooks
import { usePostDetails } from '../../hooks/usePostDetails';

export const Comment = ({ body, created, author }) => {
    const createdTime = formatDate(created);

    return (
        <div className = 'comment'>
            <p>{ author.name }</p>
            <time>{ createdTime }</time>
            <p>{ body }</p>
        </div>
    );
};

export const PostComments = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const {
        data :{
            body, created, hash, comments, author,
        }, isFetched,
    } = usePostDetails(postId);

    const commentJSX = comments?.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));

    const createdTime = formatDate(created);
    useEffect(() => {
        if (!hash && isFetched) {
            navigate('/feed', { replace: true });
        }
    }, [hash, isFetched]);

    return (
        <section>
            <div className = 'comment'>
                <p className = 'name'>{ author?.name }</p>
                <time>{ createdTime }</time>
                <p className = 'body'>{ body }</p>
                <p className = 'subtitle'>Популярные комментарии</p>
                { fetchify(isFetched, commentJSX) }
            </div>
        </section>
    );
};
