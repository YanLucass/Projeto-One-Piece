import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//configuranto router

import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/Home';
import Login from './routes/Login';
import Cadastro from  './routes/Cadastro'
import Personagens from './routes/Personagens';
import Arcos from './routes/Arcos';
import Luffy from './routes/Luffy';
import Perfil from './routes/Perfil.jsx';
import Zoro from './routes/Zoro.jsx'
import Sanji from './routes/Sanji.jsx';
import Wano from './routes/Wano.jsx';
import Desrossa from './routes/Desrossa';
import MarineFord from './routes/MarineFord';

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
   
    {
      path: '/zoro',
      element: <Zoro/>,
    },

    {
      path: '/sanji',
      element: <Sanji/>,
    },

    {
      path: '/Wano',
      element: <Wano></Wano>,
    },

    {
      path: '/Desrossa',
      element: <Desrossa/>,
    },

    {
      path: '/MarineFord',
      element: <MarineFord/>,
    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)