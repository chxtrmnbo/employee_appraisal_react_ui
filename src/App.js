import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

//Pages
import Login from './pages/Login'
import SupervisorQueue from './pages/SupervisorQueue'
import HrQueue from './pages/HrQueue'
import RateeAssessment from './pages/RateeAssessment'

// Components
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Supervisor" element={<SupervisorQueue />} />
          <Route path="/Hr" element={<HrQueue />} />
          <Route path="/Assessment" element={<RateeAssessment />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
