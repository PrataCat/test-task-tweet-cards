import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './LoadButton.styled';

const LoadButton = ({ onClickBtn }) => {
  return (
    <Button type="button" onClick={onClickBtn}>
      Load more
    </Button>
  );
};

LoadButton.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};

export default LoadButton;
