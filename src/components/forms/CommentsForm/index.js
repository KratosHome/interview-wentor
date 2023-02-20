export const CommentsForm = () => {
    return (
        <>
            <form action = '' className = 'commentForm'>
                <img
                    className = { 'comment-avatar' } src = 'https://placeimg.com/256/256/animals'
                    alt = 'avatar' />
                <label>
                    <input
                        type = 'text' name = 'body'
                        placeholder = 'Комментарий...' />
                </label>
                <button type = 'submit'>Комментировать</button>
            </form>
            <hr className = { 'separator' } />
        </>
    );
};
