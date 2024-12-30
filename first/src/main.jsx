import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Slambook from './Slambook.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Slambook/>
  </StrictMode>,
)
