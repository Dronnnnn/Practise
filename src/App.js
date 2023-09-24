import { Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Articles from './pages/Articles';
import { Container, Navbar } from 'react-bootstrap';
import Article from './pages/Article';

function App() {
  return (
    <>
      <header>
        <Navbar expand="lg" bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/"><h1 style={{marginTop: '1rem', marginLeft:'-2rem'}}>SHARETRADE.com</h1></Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/article/:id' element={<Article />} />
        </Routes>
      </main>
    </>

  );
}

export default App;
