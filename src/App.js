import './assets/styles/App.css';
import { createBrowserRouter, createBrowserRoutner, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Layout from "./layouts/layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <div>not found</div>,
      children: routes
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;
