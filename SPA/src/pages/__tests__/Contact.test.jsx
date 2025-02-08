import { render, screen } from '@testing-library/react';
import Contact from '../Contact'; // Adjust the import path as necessary

describe('Contact', () => {
  it('renders the Contact page correctly', () => {
    render(<Contact />);
    
    // Example assertions
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  });
});