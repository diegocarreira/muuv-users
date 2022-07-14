import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './Header';


describe('Header component tests',()=>{

  it('should renders the Header component and links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const usersLink = screen.getByText('Users');
    expect(usersLink).toBeInTheDocument();
    expect(usersLink).toHaveAttribute('href', '/users');
  });
  
})