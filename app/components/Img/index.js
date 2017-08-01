import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function Img(props) {
  const content = props.src.includes('youtube')
    ? <iframe className={props.className} src={props.src}></iframe>
    : <img className={props.className} src={props.src} alt={props.alt} />;

  return (
    <Wrapper>
      { content }
    </Wrapper>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
