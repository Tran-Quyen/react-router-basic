import HomePage from 'pages/Home';
import AboutPage from 'pages/About';
import ContactPage from 'pages/Contact';
import ProductPage from 'pages/Product';

const ClientRoutes = [
  {
    path: '/',
    name: 'Home',
    element: <HomePage />,
  },
  {
    path: '/about',
    name: 'About',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <ContactPage />,
  },
  {
    path: '/product',
    name: 'Product',
    element: <ProductPage />,
  },
];

export default ClientRoutes;

