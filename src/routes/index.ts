import { homeRoutes } from './home';
import { catalogRoutes } from './catalog';

const routes = {
  ...homeRoutes,
  ...catalogRoutes,
};

export default routes;
