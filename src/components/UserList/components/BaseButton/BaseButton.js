import React from 'react';
import PropTypes from 'prop-types';

// Material
import { Tooltip, IconButton } from '@material-ui/core';

const BaseButton = ({ onClick, label, children, ...rest }) => (
  <Tooltip title={label} placement="top">
    <IconButton aria-label={label} onClick={onClick} {...rest}>
      {children}
    </IconButton>
  </Tooltip>
);

BaseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default BaseButton;
