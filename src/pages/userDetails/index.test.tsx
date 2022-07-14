import { render, screen } from '@testing-library/react';
import UserDetails from './';

describe('UserList component tests',()=>{

  it('should NOT render the information without retrieve data', async () => {
    render(<UserDetails />);
    
    const userDetailsComponent = screen.queryByTestId('users-details-component');
    expect(userDetailsComponent).toBeNull();
    
    const empty = screen.getByTestId('user-details-component-empty');
    expect(empty).toBeInTheDocument();

  })

})

