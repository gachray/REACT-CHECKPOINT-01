
import React from 'react';
import product from './product';

const Image = ({ style }) => {
  return <img src={product.image} alt={product.name} style={style} />;
};

export default Image;