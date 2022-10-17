import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound'
import Course from './pages/Course'
import People from './pages/People'
import Home from './pages/Home'
import Note from './pages/Note'
import Test from './pages/Test'

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

function App() {
  if (isLocalhost) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/course" element={<Course />} />
          <Route path="/people" element={<People />} />
          <Route path="/note" element={<Note />} />
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/course" element={<Course />} />
          <Route path="/people" element={<People />} />
          <Route path="/note" element={<Home />} />
          <Route path="/test" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
