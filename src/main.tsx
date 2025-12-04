import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Pokemon from './pages/Pokemon.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import StatCalculator from './pages/StatCalculator.tsx'
import Layout from './Layout.tsx'

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <Layout>
         <Routes>
            <Route index element={<App/>}/>
            <Route path="pokemon/:id" element={<Pokemon/>}/>
            <Route path="statscalculator" element={<StatCalculator/>}/>
         </Routes>
      </Layout>
   </BrowserRouter>
)
