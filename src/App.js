import React from 'react'
import SideNavbar from './components/SideNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/user/Home.jsx'
import AboutMe from './pages/user/AboutMe.jsx'
import Skills from './pages/user/skills.jsx'
import Portfolio from './pages/user/Portfolio.jsx'
import Blogs from './pages/user/blogs.jsx'
import Contact from './pages/user/Contact.jsx'


export const App = () => {
  return (
    <div>
        <SideNavbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<AboutMe />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </div>
  )
}
export default App;