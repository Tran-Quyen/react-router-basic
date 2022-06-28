import NotFoundPage from 'pages/NotFound';

const ServiceRoutes = [
  {
    path: '*',
    name: 'NotFound',
    element: <NotFoundPage />,
  },
];

export default ServiceRoutes;

