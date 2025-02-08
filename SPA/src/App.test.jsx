import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import { renderWithRouter } from './utils/testing';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    BrowserRouter
}))