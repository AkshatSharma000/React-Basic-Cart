import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home'
import Logic from './Components/logic';
import Products from './Components/Products';
import ProductInfo from './Components/ProductInfo';
import reportWebVitals from './reportWebVitals';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  { path:"/", element:<App />, 
    children:[
      { path: "/", element: <Home /> },
      { path:"/cart",element:<Logic /> },
      { path:"/products",element:<Products /> },
      { path:"/products/:productId",element:<ProductInfo /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
