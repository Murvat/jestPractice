import { render, screen } from '@testing-library/react';
import Category from '../Category'; // Adjust the import path as necessary

describe('Category', () => {
  it('renders the Category page correctly', () => {
    render(<Category />);
    
    // Example assertions
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /category list/i })).toBeInTheDocument();
  });
});