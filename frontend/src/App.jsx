import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import Opinion from './pages/Opinion'
import Login from './pages/Login'

const App = () => {
    return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Opinion" element={<Opinion />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </Router>
    );
}

export default App;