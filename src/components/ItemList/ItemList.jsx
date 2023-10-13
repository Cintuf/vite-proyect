import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
  
  function ItemList({products}) {
    return (
        <>
        <div id="Item__list">
        {products.map(product => <Item key={product.id} product={product}/>)}
        </div>
        </>
    )
  }
  
  export default ItemList
