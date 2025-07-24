import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DownloadPage from './pages/DownloadPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<App/>}/>
      <Route path="/download/:id" element= {<DownloadPage/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
);
