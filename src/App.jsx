import './App.css';
import AddItems from './components/add-items/AddItems';
import ListItems from './components/List-items/ListItems';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/add-items" element={<AddItems />} />
        <Route path="/list-items" element={<ListItems/>} />       
      </Routes>
    </>
  );
}

export default App;
