import React, { Component } from 'react';

import Main from '../components/Main/Main';
import Tile from '../components/Tile/Tile';

export default class HomePage extends Component {
  render() {
    return (
      <Main>
        <Tile grid={[3, 5]} />
        <Tile grid={[2, 5]} />
        <Tile grid={[2, 5]} />

        <Tile grid={[6, 5]} />
        <Tile grid={[2, 5]} />
      </Main>
    );
  }
}
