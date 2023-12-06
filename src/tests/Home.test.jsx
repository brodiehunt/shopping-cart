import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

describe("Home component", () => {
  beforeEach(() => {
    render(
      <Router>
         <Home />
      </Router>
    );
  })
  it('renders hero and category section', () => {
    expect(screen.getByLabelText(/find your feet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/shop by category/i)).toBeInTheDocument();
  });

  it('renders correct headings for hero and category sections', () => {
    expect(screen.getByRole("heading", {name: /find your feet/i})).toBeInTheDocument();
    expect(screen.getByRole("heading", {name: /shop by category/i})).toBeInTheDocument();
  })

  it('renders images with correct alt attributes', () => {
    const images = screen.getAllByRole('img');
    expect(images.some(img => img.alt === 'White leather unisex sneakers'));
    expect(images.some(img => img.alt === 'White nike hightops on concrete'));
    expect(images.some(img => img.alt === 'Colorful sneakers on a pedastool'));
  })
  // Why does this test work?
  it('navigates to the product page when call to action is clicked', async () => {
    const user = userEvent.setup();
    const link = screen.getByRole("link", {name: /shop now/i});
    await user.click(link);
    expect(window.location.pathname).toBe('/products')

  })

  it('links should have the appropriate href values', () => {
    expect(screen.getByRole("link", {name: /shop now/i})).toHaveAttribute('href', '/products');
    expect(screen.getByLabelText(/shop all products/i)).toHaveAttribute('href', '/products');
    expect(screen.getByLabelText(/shop mens products/i)).toHaveAttribute('href', '/products/category/mens');
    expect(screen.getByLabelText(/shop womens products/i)).toHaveAttribute('href', '/products/category/womens');
  })
});