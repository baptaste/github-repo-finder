import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

function Nav() {
  const items = [
    {
      key: 'recherche', active: true, name: 'Recherche', pathname: '/',
    },
    { key: 'faq', name: 'FAQ', pathname: '/faq' },
  ];

  const history = useHistory();

  return (
    <Menu
      key={items.key}
      items={items}
      onClick={() => history.push(`${items.pathname}`)}
    />
  );
}

export default Nav;
