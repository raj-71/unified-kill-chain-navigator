import { Route, Routes } from 'react-router-dom';
import Compare from './components/compare';
import LandingPage from './components/landingPage';
import Mapping from './components/mapping';

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/mapping' element={<Mapping/>} />
      <Route path='/compare' element={<Compare/>} />
    </Routes>
  );
}

export default App;
