// Helpers
import { formatDate } from '../../helpers/date-fns';

export const Comment = ({ author, body, created }) => {
    const createdTime = formatDate(created);

    return (
        <ul>
            <li className = 'commentBody'>
                <p> { author.name }
                    <span>
                        { createdTime }
                    </span>
                </p>
                <p>{ body }</p>
            </li>
        </ul>
    );
};
