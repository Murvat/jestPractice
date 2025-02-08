import { Footer } from "../../../_src/components/Footer";

import { screen,render } from "@testing-library/react";

describe('Footer', () => {
    it('renders correctly', () => {
           render(<Footer />);
       
        
        expect(screen.getByText(/Copyright Text/i)).toBeInTheDocument();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });
});