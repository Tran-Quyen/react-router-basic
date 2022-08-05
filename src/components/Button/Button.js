import PropTypes from 'prop-types'; //impt

function Button(props) {
  const { children } = props;

  return <button>{children}</button>;
}

// rpt
Button.propTypes = {
  children: PropTypes.string.isRequired, // ptsr
};

export default Button;

