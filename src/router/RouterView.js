import { Routes, Route, Link } from 'react-router-dom';
import { routes } from './index';

function RouterView() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RouterView;

