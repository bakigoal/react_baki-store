import { render, screen } from '@testing-library/react';
import Car from './Car';

test('renders kia car', () => {
  render(<Car name="kia" year="2020"/>);
  const linkElement = screen.getByText(/kia/i);
  expect(linkElement).toBeInTheDocument();
});
