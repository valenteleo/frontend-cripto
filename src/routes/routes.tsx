import { Route, HashRouter, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import { Details } from '../pages/Details'

export default function AppRouter () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </HashRouter>
  )
}
