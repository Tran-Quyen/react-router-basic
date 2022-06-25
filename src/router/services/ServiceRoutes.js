import NotFoundPage from 'pages/NotFound';

const ClientRoutes = [
  {
    path: '*',
    name: 'NotFound',
    element: <NotFoundPage />,
  },
];

export default ClientRoutes;

