import React from 'react';
import PropTypes from 'prop-types';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const DeleteModal = ({ onCancel, onConfirm, children }) => (
  <Dialog open onClose={onCancel} aria-labelledby="modal-title" fullWidth>
    <DialogTitle id="modal-title">Confirm delete</DialogTitle>
    <DialogContent>
      <DialogContentText>{children}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel} color="primary" data-testid="cancel-button">
        Cancel
      </Button>
      <Button onClick={onConfirm} color="primary" data-testid="confirm-button">
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

DeleteModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default DeleteModal;
