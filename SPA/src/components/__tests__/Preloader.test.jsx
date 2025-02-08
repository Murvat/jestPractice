import { Preloader } from '../Preloader';
import { screen, render } from '@testing-library/react';


describe('Preloader', () => { 

    it('renders correctly', () => {
    render(<Preloader />);

        expect(screen.getByRole('progressbar')).toMatchSnapshot();
    })
 })