// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/LoginPage";
// import RegistrationPage from './Pages/RegistrationPage'

import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>
          {/* <Route exact path='/register' element={<RegistrationPage />}></Route> */}
          <Route path="/:params" element={<Dashboard />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
