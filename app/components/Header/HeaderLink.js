import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Quicksand', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: #fff;
  
  &:active {
    text-decoration: underline;
    color: #FFF;
  }

  color: ${(props) => props.active ? 'yellow' : 'white'};
`;
