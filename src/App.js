import { Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Articles from './pages/Articles';
import { Container, Navbar } from 'react-bootstrap';
import Article from './pages/Article';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import ScreenArticles from './pages/ScreenArticles';

function App() {

  const queryClient = new QueryClient()


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
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<ScreenArticles />} />
          <Route path='/article/:id' element={<Article />} />
        </Routes>
        </QueryClientProvider>
      </main>
    </>

  );
}

export default App;
