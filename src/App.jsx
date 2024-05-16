import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import LoginPage from './LoginPage'
import RegistrationPage from './Components/RegistrationPage'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Welcome />}></Route>
          <Route exact path='/login' element={<LoginPage />}></Route>
          <Route exact path='/register' element={<RegistrationPage />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App