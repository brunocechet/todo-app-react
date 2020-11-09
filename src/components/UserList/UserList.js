import React from 'react';
import PropTypes from 'prop-types';

// Material
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Components
import EditButton from './components/EditButton';
import DeleteButton from './components/DeleteButton';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const UserList = ({ users }) => {
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Tasks quantity</StyledTableCell>
            <StyledTableCell align="right" />
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell>{user.tasksQuantity}</StyledTableCell>
              <StyledTableCell align="right">
                <EditButton onClick={handleEdit} />
                <DeleteButton onClick={handleDelete} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tasksQuantity: PropTypes.number
    })
  ).isRequired
};

export default UserList;
