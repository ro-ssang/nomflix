import React from 'react';
import PropTypes from 'prop-types';
import DetailPresenter from './DetailPresenter';

const DetailContainer = ({
  location: { pathname },
  match: {
    params: { id },
  },
}) => {
  return <DetailPresenter />;
};

export default DetailContainer;

DetailContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
