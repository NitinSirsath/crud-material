
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/adduser' element={<AddUser />}/>
      <Route exact path='/edituser' element={<EditUser />}/>
      <Route exact path='/viewuser/:id' element={<ViewUser />}/>
    </Routes>
    </div>
  );
}

export default App;
