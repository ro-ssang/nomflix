import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loading from 'Components/Loading';
import { Helmet } from 'react-helmet';
import Message from 'Components/Message';

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
  display: flex;
  padding: 90px;
  height: 100%;
`;

const Cover = styled.img`
  flex: 1;
  border-radius: 5px;
`;

const Info = styled.div`
  flex: 4;
  margin-left: 60px;
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  line-height: 1.5;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const ListItem = styled.li`
  position: relative;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 7px;
    width: 4px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
  }
`;

const DetailPresenter = ({ result, error, loading }) => {
  return (
    <Container>
      {result && (
        <>
          <Helmet>
            <title>{result.title ? result.title : result.name} | Nomflix</title>
          </Helmet>
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
            <Info>
              <Title>{result.title || result.name}</Title>
              <List>
                <ListItem>
                  {result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}
                </ListItem>
                <ListItem>{result.runtime ? `${result.runtime} min` : `${result.episode_run_time[0]} min`}</ListItem>
                <ListItem>
                  {result.genres.map((genre, index) =>
                    index !== result.genres.length - 1 ? <span>{genre.name} / </span> : <span>{genre.name}</span>
                  )}
                </ListItem>
              </List>
              <Description>{result.overview}</Description>
            </Info>
          </Content>
        </>
      )}
      {loading && (
        <>
          <Helmet>
            <title>Loading | Nomflix</title>
          </Helmet>
          <Loading />
        </>
      )}
      {error && <Message color="#c0392b" text={error} />}
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
