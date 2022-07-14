import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should renders the App main component', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeInTheDocument();
});
