import React from 'react';
import PropTypes from 'prop-types';

// Material
import { Edit } from '@material-ui/icons';

// Components
import BaseButton from '../BaseButton';

const EditButton = ({ onClick }) => (
  <BaseButton label="Edit" onClick={onClick} data-testid="edit-button">
    <Edit />
  </BaseButton>
);

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default EditButton;
