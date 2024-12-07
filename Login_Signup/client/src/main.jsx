import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col justify-center items-center text-center h-screen'>
      <h1 className='text-9xl font-bold'>Welcome</h1 >
      <h2 className='text-2xl font-bold mt-4'>To Home Page</h2>
    </div>
    <App />
  </StrictMode>,
)
