import Landing from "./components/landing/Landing";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/user/LoginForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
