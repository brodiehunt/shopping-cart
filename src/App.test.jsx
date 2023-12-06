import {describe, it, expect, vi} from 'vitest';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

window.scrollTo = vi.fn();

describe('App component', () => {
  beforeEach(() => {
    render(
      <Router >
        <App />
      </Router>
    )
  })
  it('expect header to be rendered to the screen', () => {
   expect(screen.getByTestId("main-header")).toBeInTheDocument();
  })

  it('expect footer to be rendered to the screen', () => {
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  })
});