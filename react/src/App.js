import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Layout from './layout/Layout';
import Login from './pages/Login';
import Search from './pages/Search';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Poem from './pages/Poem';
import NewPoem from './pages/NewPoem';
import AuthProvider from './context/AuthContext';
import PoemProvider from './context/PoemContext';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <PoemProvider>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index  element={<Home/>} />
          <Route path='search' element={<Search />} />
          <Route path='newpoem' element={<NewPoem />} />
          <Route path='profile' element={<Profile />} />
          <Route path='login' element={<Login />} />        
          <Route path='poem/:id' element={<Poem />} />
        </Route>
      </Routes>

      </PoemProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
