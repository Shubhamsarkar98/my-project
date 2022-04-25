import { Route,BrowserRouter,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import ForgetPage  from './pages/ForgetPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<HomePage/>}/>
      <Route path='/login'  element={<LoginPage/>}/>
      <Route path='/forget'  element={<ForgetPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
