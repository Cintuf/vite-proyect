import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Item.css'

export default function Item({ product }) {

    return (
            <div id='card'>
                <img className='card__img' src={product.img} alt={product.name} />
                <h2 id="product__name">{product.name}</h2>
                <p id="product__price">${product.price}</p>
                <p id="product__info">{product.console}</p>
                <Link to={`/detail/${product.id}`}>
                <button>Detalle</button>
                </Link>
            </div>
    )
}
