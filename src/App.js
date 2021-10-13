import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Navigation } from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './pages/About';

function App() {

  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Navigation />

        <Route exact path = "/">
          <Home />
        </Route>

        <Route path = "/about">
          <About />
        </Route>
        
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
