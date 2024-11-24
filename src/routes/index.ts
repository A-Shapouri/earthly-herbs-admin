import { homeRoutes } from './home';
import { catalogRoutes } from './catalog';
import { localisationsRoutes } from './localisations';

const routes = {
  ...homeRoutes,
  ...catalogRoutes,
  ...localisationsRoutes,
};

export default routes;
