import React from 'react';

const Input = (props) => {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
