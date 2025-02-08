import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound'; // Adjust the import path as necessary

describe('NotFound', () => {
  it('renders the NotFound page correctly', () => {
    render(<NotFound />);
    
    // Example assertions
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
  });
});