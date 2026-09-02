import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'

const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })))
const Projects = lazy(() => import('./pages/Projects').then((m) => ({ default: m.Projects })))
const ProjectDetail = lazy(() =>
  import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })),
)
const Workshop = lazy(() => import('./pages/Workshop').then((m) => ({ default: m.Workshop })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="services"
          element={
            <Suspense fallback={null}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="projects/:slug"
          element={
            <Suspense fallback={null}>
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route
          path="workshop"
          element={
            <Suspense fallback={null}>
              <Workshop />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={null}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
