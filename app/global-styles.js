import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Quicksand', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Quicksand', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
  }

  p,
  label {
    font-family: Quicksand, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
