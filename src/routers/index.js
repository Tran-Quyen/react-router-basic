import ClientRoutes from './clients';
import AdminRoutes from './admins';
import ServiceRoutes from './services';

export const routes = [...ClientRoutes, ...AdminRoutes, ...ServiceRoutes];

export { default } from './RouterView';

