import PropTypes from "prop-types";

const Button = ({ className, type, buttonText,onClick }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {buttonText}
    </button>
  );
};

export default Button;
Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  buttonText: PropTypes.string,
  onClick:PropTypes.func,
};
