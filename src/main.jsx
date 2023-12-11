import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import { MouseContextProvider } from 'custom-pointer-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#111A28]'>
      <MouseContextProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </MouseContextProvider>
    </div>
  </React.StrictMode>,
)
