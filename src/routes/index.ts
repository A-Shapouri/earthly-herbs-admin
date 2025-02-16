import { homeRoutes } from './home';
import { catalogRoutes } from './catalog';
import { localisationsRoutes } from './localisations';
import { authRoutes } from './auth';

const routes = {
  ...homeRoutes,
  ...catalogRoutes,
  ...localisationsRoutes,
  ...authRoutes,
};

export default routes;
