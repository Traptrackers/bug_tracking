import './App.css';
import { Route,Routes } from 'react-router-dom';
import Manager_login from './components/login/Manager_login';
import Tester_login from './components/login/Tester_login';
import Manager_home from './components/Manager/Manager_pages/Manager_home';

function App() {
  return (
    <Routes>
      <Route path='/manager-login' element={<Manager_login/>}/>
      <Route path='/tester-login' element={<Tester_login/>}/>
      <Route path='/Manager-home' element={<Manager_home/>}/>
    </Routes>
  );
}

export default App;
