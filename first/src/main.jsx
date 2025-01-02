import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hen from './Hen.jsx'
import Cat from './Cat.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <List/> */}
    <App />
  </StrictMode>
)
