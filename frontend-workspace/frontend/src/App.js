import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import EmployeeListComponent from './components/EmployeeListComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdatEmployeeComponent from './components/UpdatEmployeeComponent';

function App() {
  return (
    <div className='bgColor'>
        <HeaderComponent/>

        <BrowserRouter>
          <div className ='container mt-3'>
              <Routes>
                <Route exact path='/' element={<EmployeeListComponent/>}> </Route>
                <Route path='/employees' element={<EmployeeListComponent/>}> </Route>
                <Route path='/add-employee' element={<CreateEmployeeComponent/>}></Route>
                <Route path='/employees/add-employee' element={<CreateEmployeeComponent/>}></Route>
                <Route path='/update-employee/:id' element={<UpdatEmployeeComponent/>}></Route>
                <Route path='/employees/update-employee/:id' element={<UpdatEmployeeComponent/>}></Route>
              </Routes>
          </div>
        </BrowserRouter>
        
        <FooterComponent/>
    </div>
  )
}

export default App
