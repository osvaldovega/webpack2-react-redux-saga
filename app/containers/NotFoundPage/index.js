/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import H1 from '../../components/H1';
import messages from './messages';

const Article = styled.article`
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
`;

export default function NotFound() {
  return (
    <Article>
      <H1>
        <FormattedMessage {...messages.title} />
      </H1>
    </Article>
  );
}
