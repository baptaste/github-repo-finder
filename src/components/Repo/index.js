import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Repo = () => (
  <Card className="repo">
    <Image src="url" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Nom du repo</Card.Header>
      <Card.Meta>
        <span className="date">Auteur</span>
      </Card.Meta>
      <Card.Description>
        description description description description
        description description description description
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Repo;
