import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import HomePage from './pages/HomePage';
import Error from '../components/pages/Error';
import Date from '../components/pages/Dates';
import APropos from '../components/pages/APropos';
import MentionsLegales from './pages/mentionsLegales';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/quelle-date/', // Page d'accueil
        element: <HomePage />
      },
      {
        path: 'quelle-date/apropos',
        element: <APropos />
      },
      {
        path: 'results',
        element: <Date />
      },
      {
        path: 'quelle-date/mentionslegales',
        element: <MentionsLegales />
      }
    ]
  }
]);

export default Router;