import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';

const UserModal = ({ onCancel, onSubmit, user }) => {
  const [name, setName] = useState(user.name || '');

  const modalTitle = user.id ? 'Editing user' : 'Creating new user';

  const handleSubmit = event => {
    event?.preventDefault();

    name && onSubmit({ ...user, name });
  };

  return (
    <Dialog open onClose={onCancel} aria-labelledby="user-modal-title" fullWidth>
      <DialogTitle id="user-modal-title">{modalTitle}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>Enter new user name</DialogContentText>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            autoFocus
            fullWidth
            error={!name}
            helperText="Name cannot be empty"
            label="Name"
            margin="dense"
            onChange={({ target }) => setName(target.value)}
            value={name}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

UserModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
};

UserModal.defaultProps = {
  user: {
    name: ''
  }
};

export default UserModal;
