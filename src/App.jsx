import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
