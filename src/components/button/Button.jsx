import PropTypes from "prop-types";

function Button({ text, className }) {
    return (
        <button className={`${className} btn btn__component`}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;
