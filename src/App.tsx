import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Explore from './elements/Explore';
import Experience from './elements/Experience';
import Projects from './elements/Projects';
import About from './elements/About';
import Stack from './elements/Stack';
import Education from './elements/Education';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/explore" />} />
          <Route path="explore" element={<Explore />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="stack" element={<Stack />} />
          <Route path="education" element={<Education/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
