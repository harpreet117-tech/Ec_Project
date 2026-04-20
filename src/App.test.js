import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group and names', () => {
  render(<App />);
  
  expect(screen.getByText(/Group 6/i)).toBeInTheDocument();
  expect(screen.getByText(/Harpreet Singh/i)).toBeInTheDocument();
  expect(screen.getByText(/Virendra Gadhavi/i)).toBeInTheDocument();
  expect(screen.getByText(/Saeed Awais/i)).toBeInTheDocument();
});
