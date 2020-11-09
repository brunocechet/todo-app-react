import React from 'react';
import PropTypes from 'prop-types';

// Material
import { Add } from '@material-ui/icons';
import { Fab, Tooltip } from '@material-ui/core';

const AddFab = ({ onClick }) => (
  <Tooltip title="Add" placement="top">
    <Fab color="primary" aria-label="add" onClick={onClick}>
      <Add />
    </Fab>
  </Tooltip>
);

AddFab.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddFab;
