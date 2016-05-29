import React from 'react';

import styles from './Tile.css';

const Tile = ({ grid }) => {
  let inlineStyle = {
    width: `${10 * grid[0]}vw`,
    height: `${10 * grid[1]}vh`
  };

  return (
    <section className={styles.root} style={inlineStyle}>
      <h2>Tile</h2>
    </section>
  );
};

Tile.propTypes = {
  grid: React.PropTypes.array
};

export default Tile;
