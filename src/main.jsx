import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import BusinessDetailsPage from './pages/BusinessDetailsPage';
import Account from './pages/Account';
import { UserProvider } from './context/UserContext';
import Providers from './Providers';
import AddListingPage from './pages/AddListingPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='addListig' element={<AddListingPage />} />
      <Route path='categories' element={<CategoryPage />} />
      <Route path='categories/:productId' element={<BusinessDetailsPage />} />
      <Route path='account' element={<Account />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Providers>
);
