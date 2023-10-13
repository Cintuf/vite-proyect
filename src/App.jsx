import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';

function App() {
  let saludo = 'My Store'
  return (
    <CartContextProvider >
      <BrowserRouter>
          <NavBar />
          <br />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo={saludo} />}/>
            <Route path='/Category/:category' element={<ItemListContainer />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer />}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>   
  )
}

export default App
