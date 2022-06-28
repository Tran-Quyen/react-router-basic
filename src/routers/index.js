import { PublicClientRoutes, PrivateClientRoutes } from './clients';
import AdminRoutes from './admins';

export const publicRoutes = [...PublicClientRoutes];
export const privateRoutes = [...PrivateClientRoutes, ...AdminRoutes];

export { default } from './RouterView';

