import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group and names', () => {
  render(<App />);
  
  expect(screen.getByText(/Group 5/i)).toBeInTheDocument();
  expect(screen.getByText(/Harpreet Singh/i)).toBeInTheDocument();
});