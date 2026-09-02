import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'

const wrap = (node: React.ReactNode) => <Suspense fallback={null}>{node}</Suspense>

const EersteBezoek = lazy(() => import('./pages/EersteBezoek').then((m) => ({ default: m.EersteBezoek })))
const Behandelingen = lazy(() => import('./pages/Behandelingen').then((m) => ({ default: m.Behandelingen })))
const VoorOuders = lazy(() => import('./pages/VoorOuders').then((m) => ({ default: m.VoorOuders })))
const OnsTeam = lazy(() => import('./pages/OnsTeam').then((m) => ({ default: m.OnsTeam })))
const Vragen = lazy(() => import('./pages/Vragen').then((m) => ({ default: m.Vragen })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const NietGevonden = lazy(() => import('./pages/NietGevonden').then((m) => ({ default: m.NietGevonden })))

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="eerste-bezoek" element={wrap(<EersteBezoek />)} />
        <Route path="behandelingen" element={wrap(<Behandelingen />)} />
        <Route path="voor-ouders" element={wrap(<VoorOuders />)} />
        <Route path="ons-team" element={wrap(<OnsTeam />)} />
        <Route path="veelgestelde-vragen" element={wrap(<Vragen />)} />
        <Route path="contact" element={wrap(<Contact />)} />
        <Route path="*" element={wrap(<NietGevonden />)} />
      </Route>
    </Routes>
  )
}
