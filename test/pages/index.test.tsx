import { render, screen } from 'test-utils';

import Home from '@/pages';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /web app template/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
