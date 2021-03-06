import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PopulationPage from './pages/PopulationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:idCountry" element={<PopulationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
