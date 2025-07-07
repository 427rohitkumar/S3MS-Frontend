import { useState } from "react"
import { Search } from "./components/ui/Table";
import LeftMenu from "./components/menu/LeftMenu";
import PhoneMenu from "./components/menu/PhoneMenu";
import DashboardLy from "./components/layouts/DashboardLy";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import RevenueReport from "./pages/RevenueReport";
import SeatsReport from "./pages/SeatsReport";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/dashboard' element={<DashboardLy />}>
        <Route index element={<Dashboard />} />
        <Route path='reports' element={<Reports />}>
            <Route index element={<RevenueReport/>} />
            <Route path="seats" element={<SeatsReport/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
