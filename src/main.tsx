import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { DemoModalProvider } from './context/DemoModalContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DemoModalProvider>
        <App />
      </DemoModalProvider>
    </BrowserRouter>
  </StrictMode>
)
