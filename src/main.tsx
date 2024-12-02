import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './maaain.css'
import './reset.css'
import './font.css'
import { BrowserRouter } from 'react-router-dom'






createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/react-website'>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
