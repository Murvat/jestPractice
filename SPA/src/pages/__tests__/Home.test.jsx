import { render, screen } from '@testing-library/react';
import Home from '../Home'; // Adjust the import path as necessary

describe('Home', () => {
  it('renders the Home page correctly', () => {
    render(<Home />);
    
    // Example assertions
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /welcome home/i })).toBeInTheDocument();
  });
});