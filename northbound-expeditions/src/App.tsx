import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'

const wrap = (node: React.ReactNode) => <Suspense fallback={null}>{node}</Suspense>

const Expeditions = lazy(() => import('./pages/Expeditions').then((m) => ({ default: m.Expeditions })))
const ExpeditionDetail = lazy(() =>
  import('./pages/ExpeditionDetail').then((m) => ({ default: m.ExpeditionDetail })),
)
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Guides = lazy(() => import('./pages/Guides').then((m) => ({ default: m.Guides })))
const Journal = lazy(() => import('./pages/Journal').then((m) => ({ default: m.Journal })))
const Article = lazy(() => import('./pages/Article').then((m) => ({ default: m.Article })))
const Faq = lazy(() => import('./pages/Faq').then((m) => ({ default: m.Faq })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="expeditions" element={wrap(<Expeditions />)} />
        <Route path="expeditions/:slug" element={wrap(<ExpeditionDetail />)} />
        <Route path="about" element={wrap(<About />)} />
        <Route path="guides" element={wrap(<Guides />)} />
        <Route path="journal" element={wrap(<Journal />)} />
        <Route path="journal/:slug" element={wrap(<Article />)} />
        <Route path="faq" element={wrap(<Faq />)} />
        <Route path="contact" element={wrap(<Contact />)} />
        <Route path="*" element={wrap(<NotFound />)} />
      </Route>
    </Routes>
  )
}
