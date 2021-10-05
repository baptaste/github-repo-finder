import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const items = [
    {
      key: 'recherche', name: 'Recherche', path: '/', active: isActive,
    },
    {
      key: 'faq', name: 'FAQ', path: '/faq', active: isActive,
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive(!isActive);

  return (
    <Menu
      className="nav"
    >
      {items.map((item) => (
        <Menu.Item
          as={NavLink}
          to={item.path}
          exact
          key={item.key}
          onClick={toggleIsActive}
          name={item.name}
        />
      ))}
    </Menu>
  );
}

export default Nav;
