import { HashRouter, Navigate, Route, Routes } from 'react-router';
import { Paths } from './enums';
import App from './App';
import { MainPage } from './pages';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route index element={<MainPage page={'USERS'} />} />
          <Route path={Paths.USERS} element={<MainPage page={'USERS'} />} />
          <Route path={Paths.EDIT} element={<MainPage page={'EDIT USER'} />} />
        </Route>

        <Route path={Paths.NOT_FOUND} element={<Navigate to={Paths.USERS} />} />
      </Routes>
    </HashRouter>
  );
};
