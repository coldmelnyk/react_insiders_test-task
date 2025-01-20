import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Paths } from './enums';
import App from './App';
import { UserPage } from './pages';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route path={Paths.USERS} element={<UserPage page={'USERS'} />} />
          <Route path={Paths.EDIT} element={<UserPage page={'EDIT USER'} />} />
        </Route>

        <Route path={Paths.NOT_FOUND} element={<Navigate to={Paths.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};
