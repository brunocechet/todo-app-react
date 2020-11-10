import React from 'react';

// RTL
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import UserModal from '../UserModal';

// Mocks
const onCancel = jest.fn();
const onSubmit = jest.fn();

const defaultProps = {
  onCancel,
  onSubmit,
  user: { name: '' }
};

const handleCleanUp = () => {
  onCancel.mockClear();
  onSubmit.mockClear();
};

const renderComponent = (props = defaultProps) => render(<UserModal {...props} />);

describe('UserModal component', () => {
  beforeEach(handleCleanUp);

  it('Should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('Should render "Creating new user" as title if there is not user.id', () => {
    renderComponent();

    expect(screen.getByText('Creating new user')).toBeInTheDocument();
  });

  it('Should render "Editing user" as title if there is user.id', () => {
    const props = {
      ...defaultProps,
      user: {
        id: '1234',
        name: 'Test Name'
      }
    };

    renderComponent(props);

    expect(screen.getByText('Editing user')).toBeInTheDocument();
  });

  it('Should call onCancel when clicked', () => {
    renderComponent();

    const button = screen.getByTestId('cancel-button');
    userEvent.click(button);

    expect(onCancel).toBeCalledTimes(1);
  });

  it('Should not call onSubmit when clicked if there is not name filled', () => {
    renderComponent();

    const button = screen.getByTestId('submit-button');
    userEvent.click(button);

    expect(onSubmit).toBeCalledTimes(0);
  });

  it('Should render helper text when submit if there is not name filled', () => {
    renderComponent();

    const button = screen.getByTestId('submit-button');
    userEvent.click(button);

    expect(onSubmit).toBeCalledTimes(0);
    expect(screen.getByText('Name cannot be empty')).toBeInTheDocument();
  });

  it('Should call onSubmit when clicked if there is name filled', () => {
    const props = {
      ...defaultProps,
      user: {
        id: '1234',
        name: 'Test Name'
      }
    };

    renderComponent(props);

    const button = screen.getByTestId('submit-button');
    userEvent.click(button);

    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith({
      id: '1234',
      name: 'Test Name'
    });
  });

  it('Should change name input and submit this value when form is submitted', async () => {
    renderComponent();

    const newValue = 'New Name';

    const input = screen.getByTestId('name-input');
    userEvent.type(input, newValue);

    const button = screen.getByTestId('submit-button');
    userEvent.click(button);

    await waitFor(() => expect(input).toHaveValue(newValue));

    expect(onSubmit).toBeCalledWith({
      name: newValue
    });
  });
});
