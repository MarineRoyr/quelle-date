import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout'
import Error from '../components/pages/Error'
import Date from './pages/Dates'
import APropos from '../components/pages/APropos'
import MentionsLegales from  '../components/pages/mentionsLegales'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <div> <Layout/> </div>,
    errorElement: <Error/>,
    children: [
      {
        path: '/quelle-date/'
      },
      {
        path: '/apropos',
        element: <APropos/>
      },
      {
        path: '/results',
        element: <Date/>
      },
      {
        path: '/mentionslegales',
        element: <MentionsLegales/>
      }
    ]
  }
]);

export default Router;