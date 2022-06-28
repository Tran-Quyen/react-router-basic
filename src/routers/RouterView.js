import { DefaultLayout } from 'components/Layouts';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './index';

function RouterView() {
  return (
    <Routes>
      {publicRoutes.map((route, idx) => {
        const { path, layout: RouteLayout, component: Content, exact } = route;

        let Layout = DefaultLayout;

        if (RouteLayout) Layout = RouteLayout;
        else if (RouteLayout === null) Layout = Fragment;

        const Page = () => (
          <Layout>
            <Content />
          </Layout>
        );

        if (exact)
          return <Route key={idx} exact path={path} element={<Page />} />;
        else return <Route key={idx} path={path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default RouterView;

