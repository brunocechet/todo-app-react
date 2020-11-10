import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import BaseButton from '../BaseButton';

// Mocks
const onClick = jest.fn();

const defaultProps = {
  onClick,
  label: 'Label',
  children: <span>Children Test</span>
};

const renderComponent = (props = defaultProps) => render(<BaseButton {...props} />);

describe('BaseButton component', () => {
  it('Should render the component with children', () => {
    renderComponent();

    expect(screen.getByText('Children Test')).toBeInTheDocument();
  });

  it('Should render the component with label', () => {
    renderComponent();

    expect(screen.getByTitle('Label')).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    renderComponent();

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
