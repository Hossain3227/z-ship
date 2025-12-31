import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router/dom";
import { router } from './routes/router.jsx';
import 'aos/dist/aos.css'; 
import Aos from 'aos';

Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div data-aos="fade-up" data-aos-duration="4000" className='font-urbanist max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
