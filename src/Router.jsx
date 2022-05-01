import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Contacts from "./pages/Contacts";
const PagesRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default PagesRoutes;
