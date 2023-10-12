import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { AuthPage } from './Pages/AuthPage';
import { NotFoundPage } from './Pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </MantineProvider>
  );
}

export default App;
