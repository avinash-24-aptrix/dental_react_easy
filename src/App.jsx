import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
// import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'
import DashboardNavbar from './Pages/Dashboard/DashboardNavbar'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <DashboardNavbar />
        <Routes>
          {/* <Route exact path='/' element={<LoginPage />}></Route> */}
          {/* <Route exact path='/register' element={<RegistrationPage />}></Route> */}
          <Route  path='/:params' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App