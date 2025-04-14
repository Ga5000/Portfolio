import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './in18';
import { Analytics } from '@vercel/analytics/next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>,
)
