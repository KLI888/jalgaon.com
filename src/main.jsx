import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import BusinessDetailsPage from './pages/BusinessDetailsPage.jsx'
import Account from './pages/Account.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'categories',
//         element: <CategoryPage/>
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='categories' element={<CategoryPage />} />
      <Route path='categories/:productId' element={<BusinessDetailsPage />} />

      <Route path='account' element={<Account />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
