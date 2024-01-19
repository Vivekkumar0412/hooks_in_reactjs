import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainComp from './components/MainComp.jsx'
import ChildComp from './components/ChildComp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainComp />
  </React.StrictMode>,
)
