import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App main component', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeInTheDocument();
});
