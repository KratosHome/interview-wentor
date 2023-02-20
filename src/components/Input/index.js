export const Input = (props) => {
    const input = (
        <input
            placeholder = { props.placeholder }
            type = { props.type } { ...props.register } />
    );

    return (
        <label>
            { input }
            <div>
                <span
                    className = 'error-message'>{ props.error?.message }</span>
            </div>
        </label>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};
