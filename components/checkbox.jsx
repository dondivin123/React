import PropTypes from "prop-types"

const Checkbox = ({className,type,name,required, checked}) => {
  return (
        <input 
        type={type} 
        className= {className}
        name={name} 
        required={required} 
        checked={checked}/>
  )
}

Checkbox.propTypes = {
className: PropTypes.string,
type: PropTypes.string,
name: PropTypes.string,
required: PropTypes.bool,
checked: PropTypes.bool
}

export default Checkbox