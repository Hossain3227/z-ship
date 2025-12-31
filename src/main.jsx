import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router/dom";
import { router } from './routes/router.jsx';
import 'aos/dist/aos.css'; 
import Aos from 'aos';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';

Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div data-aos="fade-up" data-aos-duration="4000" className='font-urbanist max-w-7xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
