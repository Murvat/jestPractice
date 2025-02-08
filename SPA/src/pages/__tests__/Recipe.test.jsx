import { render, screen } from '@testing-library/react';
import Recipe from '../Recipe'; // Adjust the import path as necessary

describe('Recipe', () => {
  it('renders the Recipe page correctly', () => {
    render(<Recipe />);
    
    // Example assertions
    expect(screen.getByText(/recipe/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /recipe details/i })).toBeInTheDocument();
  });
});