import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    label: 'Home'
  }
]);

export default router;
