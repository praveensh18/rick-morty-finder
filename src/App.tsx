import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Locations, Episodes, Characters, Home} from './pages'
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './pages/PageNotFound';
import EntityDetails from './pages/EntityDetails';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/characters' element={<Characters />}></Route>
        <Route path='/locations' element={<Locations />}></Route>
        <Route path='/episodes' element={<Episodes />}></Route>
        <Route path='/:entityType/:entityId' element={<EntityDetails />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
