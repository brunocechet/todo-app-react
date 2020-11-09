import React from 'react';
import faker from 'faker';

// Material
import { Box } from '@material-ui/core';

// Components
import AddFab from 'components/AddFab';
import UserList from 'components/UserList';

const usersMock = new Array(30).fill({}).map(() => ({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
  tasksQuantity: faker.random.number(150)
}));

function Users() {
  const handleAddUser = () => {};

  return (
    <div>
      <UserList users={usersMock} />
      <Box my={2} textAlign="right">
        <AddFab onClick={handleAddUser} />
      </Box>
    </div>
  );
}

export default Users;
