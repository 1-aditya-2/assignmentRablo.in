import React from 'react'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Footer from './components/footer'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Show from './components/show';

const App = () => {
  const handleSearch= ()=>{

  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/employee/:id" element={<><Header onSearch={handleSearch}/><Show /><Footer/></>}>
          {/* <Show/> */}
        </Route>
        <Route path="/" element={<><Dashboard/><Footer/></>}>
          {/* <Dashboard /> */}
          {/* <Footer/> */}
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App