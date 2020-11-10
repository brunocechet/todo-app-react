import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import AddFab from '../AddFab';

// Mocks
const onClick = jest.fn();

const defaultProps = {
  onClick
};

const renderComponent = (props = defaultProps) => render(<AddFab {...props} />);

describe('AddFab component', () => {
  it('Should render the component with children', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('Should render the component with Tooltip', () => {
    renderComponent();

    expect(screen.getByTitle('Add')).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    renderComponent();

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
