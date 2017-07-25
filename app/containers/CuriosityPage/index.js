import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadCuriosity } from './actions';
import { selectCuriosityData } from './selectors';
// import messages from './messages';


export class CuriosityPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { data } = this.props;
    if (!data) {
      this.props.loadCuriosity();
    }
  }

  render() {
    return (
      <article>
        <Helmet
          titleTemplate="%s - Curiosity"
          defaultTitle="Curiosity"
          meta={[
            { name: 'Universe App using NASA API', content: 'Reactjs app' },
          ]}
        />
      </article>
    );
  }
}

CuriosityPage.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool,
  ]),
  loadCuriosity: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadCuriosity: () => dispatch(loadCuriosity()),
  };
}

const mapStateToProps = createStructuredSelector({
  data: selectCuriosityData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(CuriosityPage);
