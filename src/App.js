import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

//Pages
import Login from "./pages/Login";
import SupervisorQueue from "./pages/SupervisorQueue";
import HrQueue from "./pages/HrQueue";
import RateeAssessment from "./pages/RateeAssessment";

import SupervisorReview from "./pages/SupervisorReview";
import { useLocation } from "react-router-dom";

// Components
import Navigation from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import Auth from "./services/storage";

function App() {
  const navigate = useNavigate();
  let id = useLocation().pathname;
  console.log(id);

  const Navbar = () => {
    if (id === "/Login") {
      return null;
    } else {
      return <Navigation />;
    }
  };
  console.log(Auth.email);

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Supervisor" element={<SupervisorQueue />} />
          <Route path="/Hr" element={<HrQueue />} />
          <Route path="/Assessment" element={<RateeAssessment />} />
          <Route path="/SupervisorReview/:id" element={<SupervisorReview />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
