import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loading from 'Components/Loading';

const Container = styled.main`
  position: relative;
  margin-top: 50px;
  height: calc(100vh - 50px);
`;

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: calc(100vh - 50px);
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  opacity: 0.3;
  filter: blur(2px);
  z-index: -1;
`;

const Content = styled.div`
  padding: 30px;
  height: 100%;
`;

const Cover = styled.img`
  height: 100%;
  border-radius: 5px;
`;

const DetailPresenter = ({ result, error, loading }) => {
  return (
    <Container>
      {result && (
        <>
          <Backdrop
            bgUrl={
              result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                : require('assets/noPosterSmall.png').default
            }
          />
          <Content>
            <Cover
              src={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                  : require('assets/noPosterSmall.png').default
              }
              alt={result.title ? result.title : result.name}
            />
          </Content>
        </>
      )}
      {loading && <Loading />}
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
