import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import EditButton from '../EditButton';

// Mocks
const onClick = jest.fn();

const defaultProps = {
  onClick
};

const renderComponent = (props = defaultProps) => render(<EditButton {...props} />);

describe('EditButton component', () => {
  it('Should render the component', async () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('Should render the component with label', async () => {
    renderComponent();

    expect(screen.getByTitle('Edit')).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    renderComponent();

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
