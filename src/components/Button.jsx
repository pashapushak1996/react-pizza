import classNames from "classnames";

export const Button = ({ className, children, outline }) => {

    const classes = classNames('button', className);

    return (
        <button className={ classes }>
            { children }
        </button>
    );
};




