import classNames from "classnames";

export const Button = ({ onClick, className, children, outline }) => {

    const classes = classNames('button', className, { 'button--outline': outline && 'button--outline' });

    return (
        <button onClick={ onClick } className={ classes }>
            { children }
        </button>
    );
};




