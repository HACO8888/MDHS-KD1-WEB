import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound'
import Course from './pages/Course'
import People from './pages/People'
import Home from './pages/Home'
import Note from './pages/Note'
import Test from './pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/people" element={ <People /> } />
        <Route path="/course" element={ <Course /> } />
        <Route path="/note" element={ <Note /> } /> 
        <Route path="/test" element={ <Test /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <NotFound /> } /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
