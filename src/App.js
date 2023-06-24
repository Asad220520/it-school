import { Route, Routes, useLocation} from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './pages/AboutUs';
import OurSchool from './pages/OurSchool';
import AllCourse from './pages/Courses';
import More from './components/HomePage/More';
import Master2 from './pages/OurSchool/MasterClass/Master';
import Login from './components/Login';
import React, {useEffect} from "react";

function App() {
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scroll(0,0)
  },[pathname])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/оШколе'} element={<OurSchool/>} />
        <Route path={"/нашиКурсы"} element={<AllCourse/>} />
        <Route path={"/оНас"} element={<AboutUs/>} />
        <Route path={"/more"} element={<More/>} />
        <Route path={'/master'} element={<Master2/>}/>
        <Route path={'/Login'} element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
