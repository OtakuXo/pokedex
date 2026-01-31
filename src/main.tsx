import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Pokemon from './pages/Pokemon.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import StatCalculator from './pages/StatCalculator.tsx'
import Layout from './Layout.tsx'
import NotFound from './pages/NotFound.tsx'
import { PokemonMoves } from './pages/PokemonMoves.tsx'

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <Layout>
         <Routes>
            <Route index element={<App />} />
            <Route path="pokemon/:name" element={<Pokemon />} />
            <Route path="moves/:name" element={<PokemonMoves />} />
            <Route path="statscalculator" element={<StatCalculator />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Layout>
   </BrowserRouter>
)
