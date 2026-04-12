import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('app header exists', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner'); // 'banner' is the role for <header> elements
  expect(headerElement).toBeInTheDocument();
});
