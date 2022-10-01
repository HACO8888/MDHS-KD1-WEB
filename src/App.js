import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound'
import Course from './pages/Course'
import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/course" element={ <Course /> } />
        <Route path="/test" element={ <Test /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <NotFound /> } /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
