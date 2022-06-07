import Navbar from './components/nav/nav';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/home" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
}

export default App;
