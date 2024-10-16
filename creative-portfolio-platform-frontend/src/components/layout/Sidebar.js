import React from 'react';

const Sidebar = ({ links }) => {
  return (
    <aside className="sidebar">
      <ul>
        {links.map((link, index) => (
          <li key={index}><a href={link.path}>{link.label}</a></li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
