import PropTypes from "prop-types";

function Button({ text, className, onClick }) {
    return (
        <button className={`${className} btn btn__component`} onClick={onClick}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
