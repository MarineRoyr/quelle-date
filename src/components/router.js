import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout'
import Error from '../components/pages/Error'
import Date from '../components/pages/Date'
import APropos from '../components/pages/APropos'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <div> <Layout/> </div>,
    errorElement: <Error/>,
    children: [
      {
        path: 'a-propos',
        element: <APropos/>
      },
      {
        path: 'recherche/:id',
        element: <Date/>
      }
    ]
  }
]);

export default Router;