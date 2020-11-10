import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import UserList from '../UserList';

// Utils
import faker from 'faker';

// Mocks
const setUserEditing = jest.fn();
const setUserDelete = jest.fn();

const usersMock = new Array(30).fill({}).map(() => ({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
  tasksQuantity: faker.random.number(150)
}));

const usersById = usersMock.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

const defaultProps = {
  setUserEditing,
  setUserDelete,
  usersById
};

const renderComponent = (props = defaultProps) => render(<UserList {...props} />);

describe('UserList component', () => {
  it('Should render the component', async () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('Should call setUserEditing when clicked on Edit button', () => {
    renderComponent();

    const button = screen.getAllByTitle('Edit')[0];
    userEvent.click(button);

    expect(setUserEditing).toBeCalledTimes(1);
  });

  it('Should call setUserDelete when clicked on Delete button', () => {
    renderComponent();

    const button = screen.getAllByTitle('Delete')[0];
    userEvent.click(button);

    expect(setUserDelete).toBeCalledTimes(1);
  });

  it.each([usersMock.map(({ name }) => name)])('User "%s" should be in the document', userName => {
    renderComponent();

    expect(screen.getByText(userName)).toBeInTheDocument();
  });
});
