import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AppLayout } from "../layouts/AppLayout.tsx";
import { Home } from '../pages/Home.tsx'

export function AppRouter() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />}/>
        {/* <Route path="/empresas" element={}/> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
