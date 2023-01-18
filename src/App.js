import './App.css';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Settings from './Pages/Settings';
import Orders from './Pages/Orders';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
