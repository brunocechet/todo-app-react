import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import DeleteButton from '../DeleteButton';

// Mocks
const onClick = jest.fn();

const defaultProps = {
  onClick
};

const renderComponent = (props = defaultProps) => render(<DeleteButton {...props} />);

describe('DeleteButton component', () => {
  it('Should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('Should render the component with label', () => {
    renderComponent();

    expect(screen.getByTitle('Delete')).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    renderComponent();

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
