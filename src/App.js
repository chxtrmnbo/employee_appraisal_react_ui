import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

//Pages
import Login from './pages/Login'
import Navigation from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
