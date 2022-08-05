import { DefaultLayout } from 'layouts';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './index';

function RouterView() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, idx) => {
          const {
            path,
            layout: RouteLayout,
            component: Content,
            updateRouteProps = {},
          } = route;

          let Layout = DefaultLayout;

          if (RouteLayout) Layout = RouteLayout;
          else if (RouteLayout === null) Layout = Fragment;

          const Page = () => (
            <Layout>
              <Content />
            </Layout>
          );

          return (
            <Route
              key={idx}
              path={path}
              element={<Page />}
              {...updateRouteProps}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default RouterView;

