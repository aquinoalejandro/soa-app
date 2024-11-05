import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import Opinion from './pages/Opinion'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
    return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Opinion" element={<Opinion />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
    </Router>
    );
}

export default App;