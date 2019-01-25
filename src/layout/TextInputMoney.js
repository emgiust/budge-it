import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import classnames from 'classnames';

//bring in props as a parameter on the functional
//component
const TextInputMoney = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <NumberFormat
        thousandSeparator={true}
        prefix={'$'}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputMoney.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

//makes the default prop for the type value equal text
//type: text
//most of these input types are text except email
TextInputMoney.defaultProps = {
  type: 'text'
};

export default TextInputMoney;
