import { Routes, Route, Link } from 'react-router-dom';
import { routes } from './index';

function RouterView() {
  return (
    <Routes>
      {routes.map((route, idx) => {
        if (route.exact)
          return <Route key={route.name} exact path={route.path} element={route.element} />;
        else return <Route key={route.name} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export default RouterView;

