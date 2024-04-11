// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './component/layout';
import Home from './component/home';
import About from './component/about';
import Portifolio from './component/portifolio';
import Resume from './component/resume';
import Articles from './component/articles';
import Contact from './component/contact';

// Importing animations
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


  function App() {
    useEffect(() => {
      Aos.init();
    }, []);
    
    // const [count, setCount] = useState(0)

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="portifolio" element={<Portifolio />} />
              <Route path="resume" element={<Resume />} />
              <Route path="articles" element={<Articles />} />
              <Route path="contact" element={<Contact />} />

            </Route>
          </Routes>
        </BrowserRouter>

      </>
    )
  }

export default App
