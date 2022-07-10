import { Route, Routes as RouterDomRoutes } from 'react-router-dom';

import Home from './pages/home';
import Users from './pages/users';
import UserDetails from './pages/userDetails';

const Routes = () => {
  return (
    <RouterDomRoutes>
      <Route path='/' element={ <Home /> } />

      <Route path='/users' element={ <Users /> } />

      <Route path='/users/:id' element={ <UserDetails /> } />

      <Route path='*' element={ <Home /> } />
    </RouterDomRoutes>
  );
};

export default Routes;
