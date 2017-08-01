import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Wrapper from './Wrapper';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.intro} />
          </HeaderLink>
          <HeaderLink to="/apod">
            <FormattedMessage {...messages.apod} />
          </HeaderLink>
          <HeaderLink to="/curiosity">
            <FormattedMessage {...messages.curiosity} />
          </HeaderLink>
        </NavBar>
      </Wrapper>
    );
  }
}

export default Header;
