import React from 'react';

const Button = ({
  className,
  type,
  text
}) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;