
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import About from '../pages/about/page';
import Services from '../pages/services/page';
import Projects from '../pages/projects/page';
import Contact from '../pages/contact/page';
import Privacy from '../pages/privacy/page';
import Terms from '../pages/terms/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
