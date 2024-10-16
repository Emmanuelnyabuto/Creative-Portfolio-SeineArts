// src/components/shared/DropdownMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span>{label}</span>
      {isOpen && (
        <ul className="dropdown-content">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
