import React, { useState } from 'react';
import faker from 'faker';

// Material
import { Box } from '@material-ui/core';

// Components
import AddFab from 'components/AddFab';
import DeleteModal from 'components/DeleteModal';
import UserList from 'components/UserList';
import UserModal from 'components/UserModal';

const usersMock = new Array(30).fill({}).map(() => ({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
  tasksQuantity: faker.random.number(150)
}));

const Users = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userDelete, setUserDelete] = useState(null);

  const [usersById, setUsersById] = useState(() =>
    usersMock.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {})
  );

  const handleCreateNewUser = ({ name }) => {
    setUsersById(currentUsers => {
      const newUser = { id: faker.random.uuid(), name, tasksQuantity: faker.random.number(150) };

      return {
        ...currentUsers,
        [newUser.id]: newUser
      };
    });

    setUserInfo(null);
  };

  const handleEditUser = ({ id, name }) => {
    setUsersById(currentUsers => {
      return {
        ...currentUsers,
        [id]: {
          ...currentUsers[id],
          name
        }
      };
    });

    setUserInfo(null);
  };

  const handleUserCreateUpdate = infoUser => {
    infoUser.id ? handleEditUser(infoUser) : handleCreateNewUser(infoUser);
  };

  const handleUserDelete = () => {
    setUsersById(currentUsers => {
      return {
        ...currentUsers,
        [userDelete.id]: {
          ...userDelete,
          deleted: true
        }
      };
    });

    setUserDelete(null);
  };

  const renderModalUser = () =>
    userInfo && <UserModal user={userInfo} onCancel={() => setUserInfo(null)} onSubmit={handleUserCreateUpdate} />;

  const renderModalDeleteUser = () =>
    userDelete && (
      <DeleteModal user={userInfo} onCancel={() => setUserDelete(null)} onConfirm={handleUserDelete}>
        Are you sure you want to delete user {userDelete.name} ?
      </DeleteModal>
    );

  return (
    <div>
      <UserList usersById={usersById} setUserDelete={setUserDelete} setUserEditing={setUserInfo} />
      <Box my={2} textAlign="right">
        <AddFab onClick={() => setUserInfo({ name: '' })} />
      </Box>
      {renderModalDeleteUser()}
      {renderModalUser()}
    </div>
  );
};

export default Users;
