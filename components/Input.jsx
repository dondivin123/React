import PropTypes from 'prop-types'; 

const Input = ({ type, required 
, placeholder, className,onChange, value}) => {
  return (
    <input
      type={type}
      className={className} 
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string, 
  placeholder: PropTypes.string,
  required: PropTypes.bool, 
  className: PropTypes.string, 
  onChange: PropTypes.func, 
  value: PropTypes.func, 
};

export default Input;
