import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//configuranto router

import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/Home';
import Login from './routes/Login';
import errorPage from './routes/errorPage';
import Cadastro from  './routes/Cadastro'
import Personagens from './routes/Personagens';
import Arcos from './routes/Arcos';
import Luffy from './routes/Luffy';
import Perfil from './routes/Perfil.jsx';

const router = createBrowserRouter([
  
    {
      path: '/',
      element: <Home/>,
      
    },
    {
      path: "/login",
      element: <Login/>,
    },

    {
      path: "/cadastro",
      element: <Cadastro />,
    },

    {
      path: "/Personagens",
      element: <Personagens/>,
    },

    {
      path: '/Arcos',
      element: <Arcos/>,
    },
    {
      path: '/luffy',
      element: <Luffy/>,
    },
    {
      path: '/Perfil',
      element: <Perfil/>,
    },
   
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
