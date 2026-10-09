import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PerfilPage from './pages/PerfilPage.tsx'
import VerDetalhes from './pages/VerDetalhes.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/perfil" element={<PerfilPage />} />
      <Route path="/detalhes" element={<VerDetalhes />} />
    </Routes>
  </BrowserRouter>
)