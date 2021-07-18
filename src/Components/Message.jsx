import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 24px;
`;

const Message = ({ color, text }) => {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
};

Message.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
