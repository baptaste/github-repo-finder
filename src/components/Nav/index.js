import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const items = [
    {
      key: 'recherche', name: 'Recherche', path: '/',
    },
    {
      key: 'faq', name: 'FAQ', path: '/faq',
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive(!isActive);

  return (
    <Menu
      items={items}
      className="nav"
    >
      {items.map((item) => (
        <Menu.Item
          as={NavLink}
          to={item.path}
          key={item.key}
          onClick={toggleIsActive}
          active={isActive}
          name={item.name}
        />
      ))}
    </Menu>
  );
}

export default Nav;
