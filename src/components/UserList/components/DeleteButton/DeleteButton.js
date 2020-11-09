import React from 'react';
import PropTypes from 'prop-types';

// Material
import { Delete } from '@material-ui/icons';

// Components
import BaseButton from '../BaseButton';

const DeleteButton = ({ onClick }) => (
  <BaseButton label="Delete" onClick={onClick}>
    <Delete />
  </BaseButton>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteButton;
