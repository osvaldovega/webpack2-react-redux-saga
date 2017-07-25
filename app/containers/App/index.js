/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';
import universe from './universe2.png';

const AppWrapper = styled.div`
  max-width: 100%;  
  min-height: 100%;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  z-index: 2;
  position: fixed; 
`;

const BackgroundImage = styled.div`
  background-image: url(${universe});
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  filter: blur(0px);
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function App(props) {
  return (
    <AppContainer>
      <BackgroundImage />
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Universe"
          defaultTitle="Universe"
          meta={[
            { name: 'Universe App using NASA API', content: 'Reactjs app' },
          ]}
        />
        <Header />
        {React.Children.toArray(props.children)}
      </AppWrapper>
    </AppContainer>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default withProgressBar(App);
