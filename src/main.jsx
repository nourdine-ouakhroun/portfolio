import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
  </StrictMode>,
)
