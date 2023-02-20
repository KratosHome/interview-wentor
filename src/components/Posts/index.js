// Components
import { Post } from '../Post';
import { Composer } from '../forms/Composer';

// Hooks
import { usePosts } from '../../hooks/usePosts';

// Helpers
import { fetchify } from '../../helpers/fetchify';

export const Posts = () => {
    const { data, isFetched } = usePosts();

    const postsJSX = data.map((post) => (
        <Post key = { post.hash } { ...post } />
    ));

    return (
        <div className =  'posts' >
            <h1 className = 'title'>
                Стена
            </h1>
            <Composer />
            <div
                className = 'posts-container'
                style = { { position: 'relative' } }>
                { fetchify(isFetched, postsJSX) }
            </div>
        </div>
    );
};
