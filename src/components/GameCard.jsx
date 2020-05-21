import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const GameCard = game => {
  const { title, manufacturer, price, image, addToCart, addedCount } = game;
  return (
    <Card>
      <div className="card-image">
        <Image src={image} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{manufacturer}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="bitcoin" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, game)}>
        Add to trash {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default GameCard;
