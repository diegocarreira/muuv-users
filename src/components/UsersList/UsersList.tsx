import './UsersList.scss';
import { User } from '../../models/User';

type UsersListProps = {
  users: User[];
  handleClick?: (id: number) => void;
};

const UsersList = ({ users, handleClick }: UsersListProps) => {

  const handleClickUser = (id: number) => {
    if (handleClick && id > 0) {
      handleClick(id);
    }
  };

  return (
    <div className='users-list'>
      {users.map((user: User) => {
        return (
          <div
            data-testid='users-item'
            key={user.id}
            className='users-item'
            onClick={() => {
              if (user.id) {
                handleClickUser(user.id);
              }
            }}
          >
            <img src={user.avatar} alt="user profile avatar" />
            <span className='name' data-testid='user-name'>{user.first_name} {user.last_name}</span>
            <span className='email' data-testid='user-email'>{user.email}</span>
          </div>
        );
      })}
      {(!users || users.length <= 0) && (
        <span className='empty'>There is no users to show</span>
      )}
    </div>
  );
};

export default UsersList;
