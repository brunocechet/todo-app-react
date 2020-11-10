import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import DeleteModal from '../DeleteModal';

// Mocks
const onCancel = jest.fn();
const onConfirm = jest.fn();

const defaultProps = {
  onCancel,
  onConfirm,
  children: <span>Children Test</span>
};

const renderComponent = (props = defaultProps) => render(<DeleteModal {...props} />);

describe('DeleteModal component', () => {
  it('Should render the component with children', () => {
    renderComponent();

    expect(screen.getByText('Children Test')).toBeInTheDocument();
  });

  it('Should call onCancel when clicked', () => {
    renderComponent();

    const button = screen.getByTestId('cancel-button');
    userEvent.click(button);

    expect(onCancel).toBeCalledTimes(1);
  });

  it('Should call onConfirm when clicked', () => {
    renderComponent();

    const button = screen.getByTestId('confirm-button');
    userEvent.click(button);

    expect(onConfirm).toBeCalledTimes(1);
  });
});
