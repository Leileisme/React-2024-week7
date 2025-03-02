import { Provider } from 'react-redux'
import { store } from './store/store.js'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createHashRouter, RouterProvider } from 'react-router'
import routes from './router.jsx'

const router = createHashRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>、
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
