import React from 'react';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home,Contact,Projects,About} from './pages'
import { Footer } from './components';


function App() {
  return (
    <div>

        <main className='bg-slate-300/20'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route  path='/' element={<Home/>}/>
                    <Route  path='/about' element={<About/>}/>
                    <Route  path='/projects' element={<Projects/>}/>
                    <Route  path='/contact' element={<Contact/>}/>
                </Routes>
                <Footer />

            </Router>

        </main>
      
    </div>
  )
}

export default App
