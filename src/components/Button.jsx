import classNames from "classnames";

const Button = ({ className, children, outline }) => {

    const classes = classNames('button', className);

    return (
        <button className={ classes }>
            { children }
        </button>
    );
};

export default Button;


