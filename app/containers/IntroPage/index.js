/*
*   Intro Page
*
*   This is the first page use see in the app, route is '/'
*/

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import CenteredSection from './CenteredSection';
import H1 from './H1';
import P from './P';
import Wrapper from './Wrapper';
import messages from './messages';

export default class IntroPage extends PureComponent {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="Intro"
          meta={[
            { name: 'Universe intro page', content: 'React.js Universe application introPage' },
          ]}
        />
        <CenteredSection>
          <H1>
            <FormattedMessage {...messages.introUniverse} />
          </H1>
          <P>
            <FormattedMessage {...messages.introDescription} />
          </P>
        </CenteredSection>
      </Wrapper>
    );
  }
}
