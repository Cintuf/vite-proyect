import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount({stock, addToCart}) {
    const[count, setCount]= useState(1)

    let add = () => {
        if(count<stock ){
            setCount(count +1)
        }
    }

    let less = () => {
       if(count>1)
       setCount(count-1)
    }

    function HandleAdd(){
        addToCart(count)
      }
    

  return (
    <>
        <h3>Cantidad a comprar</h3>
    <div id="item__count">
        <button onClick={add}>+</button>
        <p>{count}</p>
        <button onClick={less}>-</button>
    </div>
    <button id="addToCart" onClick={HandleAdd}>Agregar a carrito</button>
    </>
  )
}
