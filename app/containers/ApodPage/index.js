import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadApod } from './actions';
import { selectApodData } from './selectors';
// import messages from './messages';
import Wrapper from '../../components/Wrapper';
import Media from '../../components/Media';
import H2 from '../../components/H2';
import P from '../../components/P';
import Span from '../../components/Span';

const Section = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Picture = styled.div`
  width: 500px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 15px #fff;
`;

const Details = styled.div`
  width: 40%;
  height: 100%;
  color: #fff;
  margin-left: 5%;
  padding: 0 1em;
  background-color: #000;
  opacity: 0.6;
  border-radius: 5px;
`;

export class ApodPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { data } = this.props;
    if (!data) {
      this.props.loadApod();
    }
  }

  render() {
    const { data } = this.props;

    const content = data
      ? (<Section>
        <Picture>
          <Media src={data.hdurl || data.url} alt={'test'} />
        </Picture>
        <Details>
          <H2>{data.title}</H2>
          <P>{data.explanation}</P>
          <Span>{data.date}</Span>
        </Details>
      </Section>)
      : '';

    return (
      <Wrapper>
        <Helmet
          title="APOD"
          meta={[
            { name: 'Universe apod page', content: 'React.js application apodPage' },
          ]}
        />
        {content}
      </Wrapper>
    );
  }
}

ApodPage.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool,
  ]),
  loadApod: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadApod: () => dispatch(loadApod()),
  };
}

const mapStateToProps = createStructuredSelector({
  data: selectApodData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApodPage);
