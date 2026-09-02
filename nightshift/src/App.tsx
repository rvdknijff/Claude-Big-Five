import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'

const wrap = (node: React.ReactNode) => <Suspense fallback={null}>{node}</Suspense>

const Lineup = lazy(() => import('./pages/Lineup').then((m) => ({ default: m.Lineup })))
const Timetable = lazy(() => import('./pages/Timetable').then((m) => ({ default: m.Timetable })))
const Venues = lazy(() => import('./pages/Venues').then((m) => ({ default: m.Venues })))
const Art = lazy(() => import('./pages/Art').then((m) => ({ default: m.Art })))
const Info = lazy(() => import('./pages/Info').then((m) => ({ default: m.Info })))
const Archive = lazy(() => import('./pages/Archive').then((m) => ({ default: m.Archive })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="line-up" element={wrap(<Lineup />)} />
        <Route path="timetable" element={wrap(<Timetable />)} />
        <Route path="venues" element={wrap(<Venues />)} />
        <Route path="art" element={wrap(<Art />)} />
        <Route path="info" element={wrap(<Info />)} />
        <Route path="archive" element={wrap(<Archive />)} />
        <Route path="*" element={wrap(<NotFound />)} />
      </Route>
    </Routes>
  )
}
