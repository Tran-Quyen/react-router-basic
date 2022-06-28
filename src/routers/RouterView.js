import { DefaultLayout } from 'components/Layouts';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './index';

function RouterView() {
  return (
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
  );
}

export default RouterView;

