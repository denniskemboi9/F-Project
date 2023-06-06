import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Layout from './layout/Layout';
import Search from './pages/Search';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Poem from './pages/Poem';
import NewPoem from './pages/NewPoem';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index  element={<Home/>} />
        <Route path='search' element={<Search />} />
        <Route path='newpoem' element={<NewPoem />} />
        <Route path='profile' element={<Profile />} />
        <Route path='poem/:id' element={<Poem />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
