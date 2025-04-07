import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: any) => <div>{children}</div>,
  Routes: ({ children }: any) => <div>{children}</div>,
  Route: () => <div>Route</div>,
  NavLink: ({ children }: any) => <span>{children}</span>,
}));

test('renders App without crashing', () => {
  render(<App />);
  const navElement = screen.getByText(/About Me/i);
  expect(navElement).toBeInTheDocument();
});
