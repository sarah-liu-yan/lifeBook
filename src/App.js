import './App.css';
import { Home } from './pages/Home';
import { Navigation } from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Container } from 'react-bootstrap';
import { Cart } from './pages/Cart';

function App() {

  return (
      <Container fluid={true}>
        <BrowserRouter>
          <Navigation />

          <Route exact path = "/">
            <Home />
          </Route>

          <Route path = "/about">
            <About />
          </Route>
          
          <Route exact path = "/cart">
            <Cart />
          </Route>
        </BrowserRouter>
      </Container>
    
  );
}

export default App;
