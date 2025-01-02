import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { PetsProvider } from './provider/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PetsProvider>
      <App />
    </PetsProvider>
  </StrictMode>,
)
