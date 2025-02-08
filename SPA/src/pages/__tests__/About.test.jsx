import { render, screen } from '@testing-library/react';
import About from '../About'; // Adjust the import path as necessary

describe('About', () => {
  it('renders the About page correctly', () => {
    render(<About />);
    
    // Example assertions
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
  });
});