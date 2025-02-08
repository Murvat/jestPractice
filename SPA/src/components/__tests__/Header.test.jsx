import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../_src/utils/testing";

import { Header } from "../../../_src/components/Header";

describe('Header', () => {
    it('renders correctlys', () => {
        renderWithRouter(<Header />);
        expect(screen.getByText(/React food/i)).toBeInTheDocument();
        expect(screen.getAllByRole('link')).toHaveLength(3);
    });
});

