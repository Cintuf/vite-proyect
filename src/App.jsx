import React, { useState } from "react",
import "./App.css",
import Header from "./components/Header",
import NavBar from "./components/NavBar",
import ItemListContainer from "./components/ItemListContainer",

const App = () => {


  return (
    <div>
      <NavBar />
      <div className='Products'>
      <ItemListContainer
          img="https://static-cdn.jtvnw.net/ttv-boxart/490422-272x380.jpg"
          name="Starcraft"
          description="StarCraft II: Wings of Liberty es un videojuego de estrategia en tiempo real desarrollado por Blizzard Entertainment"
          price="$2500" />
        <ItemListContainer
          img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/11/kh3-cover.jpg?tf=1200x"
          name="KINGDOM HEARTS III"
          description="videojuego de tipo ARPG desarrollado por Square Enix "
          price="$3250" />
        <ItemListContainer
          img="https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg"
          name="Final Fantasy VII "
          description="videojuego de rol desarrollado y publicado por la empresa Square "
          price="$250" />
        <ItemListContainer
          img="https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg"
          name="Final Fantasy VI "
          description="videojuego de rol desarrollado y publicado por la empresa Square "
          price="$300" />    
               
      </div>

    </div>

  )
}

export default App