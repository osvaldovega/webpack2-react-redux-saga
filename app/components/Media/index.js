import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const Media = (props) => <Wrapper className={props.className} src={props.src} alt={props.alt} />;

// We require the use of src and alt, only enforced by react in dev mode
Media.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Media;
