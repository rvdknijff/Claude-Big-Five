import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'

const wrap = (node: React.ReactNode) => <Suspense fallback={null}>{node}</Suspense>

const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })))
const Cases = lazy(() => import('./pages/Cases').then((m) => ({ default: m.Cases })))
const CaseStudy = lazy(() => import('./pages/CaseStudy').then((m) => ({ default: m.CaseStudy })))
const Insights = lazy(() => import('./pages/Insights').then((m) => ({ default: m.Insights })))
const Article = lazy(() => import('./pages/Article').then((m) => ({ default: m.Article })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={wrap(<Services />)} />
        <Route path="cases" element={wrap(<Cases />)} />
        <Route path="cases/:slug" element={wrap(<CaseStudy />)} />
        <Route path="insights" element={wrap(<Insights />)} />
        <Route path="insights/:slug" element={wrap(<Article />)} />
        <Route path="about" element={wrap(<About />)} />
        <Route path="contact" element={wrap(<Contact />)} />
        <Route path="*" element={wrap(<NotFound />)} />
      </Route>
    </Routes>
  )
}
