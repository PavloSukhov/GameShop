import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

import GameCard from '../containers/GameCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

class App extends Component {
  componentWillMount() {
    const { setGames } = this.props;
    axios.get('/games.json').then(({ data }) => {
      setGames(data);
    });
  }

  render() {
    const { games, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Loading'
            : games.map((game, i) => <GameCard key={i} {...game} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
