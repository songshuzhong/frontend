import { App } from '../pages/app';
import { About } from '../pages/about';
import { Home } from '../pages/home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/app',
    exact: true,
    component: App
  },
  {
    path: '/about',
    exact: true,
    component: About
  }
];

export default routes;
