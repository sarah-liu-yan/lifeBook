import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Navigation } from './components/Nav';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Navigation />
        <Home />
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
