import { Link } from 'react-router-dom';
import { PostComments } from '../../components/PostComments';


export const PostCommentsPage = () => {
    return (
        <>
            <div className = 'wrapper'>
                <Link to = '/feed' className = 'link-back'>
                    <div className = 'arrow'></div>
            Назад
                </Link>
                <h1 className = 'title'>Комментарии к посту</h1>
                <PostComments />
            </div>
        </>
    );
};
