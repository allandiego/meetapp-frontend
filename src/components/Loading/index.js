import React from 'react';
import PropTypes from 'prop-types';
import { Dots } from 'react-activity';

import { Container, Overlay } from './styles';

export default function Loading({ color, size, speed, animating, type }) {
  switch (type) {
    case 'standalone':
      return (
        <Dots color={color} size={size} speed={speed} animating={animating} />
      );
    case 'overlay':
      return (
        <Overlay>
          <Dots color={color} size={size} speed={speed} animating={animating} />
        </Overlay>
      );
    default:
      return (
        <Container>
          <Dots color={color} size={size} speed={speed} animating={animating} />
        </Container>
      );
  }
}

Loading.defaultProps = {
  size: 40,
  color: '#fff',
  speed: 1,
  animating: true,
  type: '',
};

Loading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
  animating: PropTypes.bool,
  type: PropTypes.string,
};
