// src/components/shared/Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
