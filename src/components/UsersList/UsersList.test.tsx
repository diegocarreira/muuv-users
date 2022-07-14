import { render, screen } from '@testing-library/react';
import UsersList from './UsersList';
import { userMock } from '../../models/User';


describe('UserList component tests',()=>{

  it('should NOT render the list without user props and shows the empty message', async () => {
    render(<UsersList users={[]} />);
    
    const items = screen.queryAllByTestId('users-item');
    expect(items.length).toBe(0);

    const empty = screen.getByText('There is no users to show');
    expect(empty).toBeInTheDocument();

  })

  it('should render the list with the users passed by props', async () => {
    render(<UsersList users={[userMock]} />);
    
    const username = screen.getByTestId('user-name');
    expect(username).toHaveTextContent(`${userMock.first_name} ${userMock.last_name}`);
  })

})

