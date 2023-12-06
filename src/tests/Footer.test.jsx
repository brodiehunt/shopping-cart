import Footer from '../components/Footer.jsx';
import {describe, it, expect, vi} from 'vitest';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {BrowserRouter as Router} from 'react-router-dom';

describe('Footer component', () => {
  beforeEach(() => {
    render(
      <Router >
        <Footer/>
      </Router>
    )
  })
  it('expect footer to render with logo img', () => {
    const logoImg = screen.getByRole('img', {name: 'Sneakers Company Logo'});
    expect(logoImg).toBeInTheDocument();
  })
  
})