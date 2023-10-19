import Landing from './components/landing/Landing';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
