// Layouts
import { OtherLayout } from 'layouts';

// Pages
import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Product from 'pages/Product';
import NotFound from 'pages/NotFound';

const PublicClientRoutes = [
  {
    path: '/',
    component: Home,
    updateRouteProps: {
      exact: true,
    },
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
    layout: OtherLayout,
  },
  {
    path: '/product',
    component: Product,
    layout: OtherLayout,
  },
  {
    path: '*',
    component: NotFound,
    layout: null,
  },
];

export default PublicClientRoutes;

