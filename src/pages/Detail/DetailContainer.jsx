import { movieApi, tvApi } from '@api/movieDatabase';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailPresenter from './DetailPresenter';

const DetailContainer = ({
  location: { pathname },
  match: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pathname.startsWith('/movies')) {
      const fetchMovieData = async () => {
        try {
          const { data } = await movieApi.detail(id);
          setMovie(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchMovieData();
    }
    if (pathname.startsWith('/shows')) {
      const fetchShowData = async () => {
        try {
          const { data } = await tvApi.detail(id);
          setShow(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchShowData();
    }
  }, []);

  return <DetailPresenter loading={loading} movie={movie} show={show} error={error} />;
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
