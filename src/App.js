import './App.css';
import Home from './components/Pages/Home/Home';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import AddEvent from './components/Pages/AddEvent/AddEvent';

function App() {
  return (
    <div >
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add-event' element={<AddEvent />} />
      </Routes>

    </div>
  );
}

export default App;
