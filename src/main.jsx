import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import TopPage from './pages/TopPage.jsx'
import PopupScam from './pages/PopupScam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/c0a24220" element={<PopupScam />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
