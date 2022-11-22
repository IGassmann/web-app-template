import React from 'react';
import Home from '@/pages';
import { render, screen } from 'test-utils';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /web app template/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
