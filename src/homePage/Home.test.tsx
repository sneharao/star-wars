import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {

  test('renders with correct header text', () => {
    const { getByTestId } = render(<Home />, { wrapper: BrowserRouter });
    expect(getByTestId('headerText')).toBeInTheDocument();
    expect(getByTestId('headerText').innerHTML).toBe('Character list');
  });

  test('starts loading data on fetch call', () => {
      const { getByTestId } = render(<Home />, { wrapper: BrowserRouter });
      expect(getByTestId('loader')).toBeInTheDocument();
  });
})

