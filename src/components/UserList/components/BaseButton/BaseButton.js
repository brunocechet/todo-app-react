import React from 'react';
import PropTypes from 'prop-types';

// Material
import { Tooltip, IconButton } from '@material-ui/core';

const BaseButton = ({ onClick, label, children }) => (
  <Tooltip title={label} placement="top">
    <IconButton aria-label={label} onClick={onClick}>
      {children}
    </IconButton>
  </Tooltip>
);

BaseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default BaseButton;
