import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './index.css'
import Homepage from './Pages/Homepage.tsx'
import Projects from './Pages/Projects.tsx';
import About from './Pages/About.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <header>
      <nav>
        <h1>Portfolio</h1>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to= "Projects">Projects</NavLink>
        <NavLink to= "About">About</NavLink>
        <NavLink to= "App">App</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path = "App" element ={<App/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About/>} />
      </Routes>
      
    </main>
  </BrowserRouter>
)
