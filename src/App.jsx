import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Welcome from './Pages/Welcome'
import Dashboard from './Pages/Dashboard'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path='/' element={<Welcome />}></Route> */}
          <Route exact path='/' element={<LoginPage />}></Route>
          <Route exact path='/register' element={<RegistrationPage />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App