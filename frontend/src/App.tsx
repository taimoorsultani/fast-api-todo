import { createBrowserHistory as createHistory } from 'history';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router';
import MyLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import { ItemCreate, ItemEdit, ItemList } from './pages/Items';
import { TodoCreate, TodoEdit, TodoList } from './pages/Todos';
import LoginPage from './pages/Login';
import { ProfileEdit } from './pages/ProfileEdit';
import Register from './pages/Register';
import { UserEdit, UserList } from './pages/Users';
import authProvider from './providers/authProvider';
import PostIcon from '@mui/icons-material/PostAdd';
import PersonIcon from '@mui/icons-material/Person';
import { dataProvider } from './providers/dataProvider';
import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <Admin
      disableTelemetry
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
      history={createHistory()}
      layout={MyLayout}
      dashboard={Dashboard}
    >
      <CustomRoutes>
        <Route path='/my-profile' element={<ProfileEdit />} />
      </CustomRoutes>
      <CustomRoutes noLayout>
        <Route path='/register' element={<Register />} />
      </CustomRoutes>
      <CustomRoutes noLayout>
        <Route path='/home' element={<Home />} />
      </CustomRoutes>
      {(permissions) => [
        permissions.is_superuser === true ? (
          <Resource
            options={{ label: 'Users' }}
            name='users'
            list={UserList}
            edit={UserEdit}
            icon={PersonIcon}
          />
        ) : null,
        <Resource
          name='items'
          options={{ label: 'Items' }}
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          icon={PostIcon}
        />,
        <Resource
          name='todos'
          options={{ label: 'Todos' }}
          list={TodoList}
          edit={TodoEdit}
          create={TodoCreate}
          icon={PostIcon}
        />,
      ]}
    </Admin>
  );
};

export default App;
