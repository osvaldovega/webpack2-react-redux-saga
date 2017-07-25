import React from 'react';
import PropTypes from 'prop-types';

const Tumbail = (props) => {
  const { data } = props;
  return (
    <div>
      {data}
    </div>
  );
};

Tumbail.propTypes = {
  data: PropTypes.string,
};

export default Tumbail;
