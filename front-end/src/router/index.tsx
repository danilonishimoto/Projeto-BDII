import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AppLayout } from "../layouts/AppLayout.tsx";
import { Home, Companies, Clients, Cities, Services, Orders, Employees } from '../pages/index.ts'

export function AppRouter() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/cadastro">
          <Route path='empresas' element={<Companies />}/>
          <Route path='clientes' element={<Clients />}/>
          <Route path='cidades' element={<Cities />}/>
          <Route path='servicos' element={<Services />}/>
          <Route path='pedidos' element={<Orders />}/>
          <Route path='funcionarios' element={<Employees />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
