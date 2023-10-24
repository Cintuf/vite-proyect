import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({products=[]}) => {
    const [isCant, setIsCant] = useState(false)
    const {addToCard}= useCartContext()

    const onAdd = (cant)=>{
        addToCard({...products, cant})    
        setIsCant(true)

    }
    return (
        <div className='container' id='contenedor'>
            <div className='row'>
                <div className='card cardItemDetail'>
                    <div className='card-header cardItemDetailHeader'>
                        <img className='imgItemDetail' src={products.img} />
                    </div>
                    <div className='card-body cardItemDetailBody'>
                        <h4>Nombre: {products.Name}</h4>
                        <h4>Categoria: {products.Category}</h4>
                    </div>
                    <div className='card-footer cardItemDetailFooter'>
                        <h4>Precio: ${products.Price}</h4>
                        <h5>Stock: {products.Stock}</h5>
                        <a href="/"><button className='btn btn-outline-warning'>Volver a Inicio</button></a>
                    </div>   
                </div>
                <div className='col colItemDetail'>
                    {isCant?
                    
                        <div className='card card-body colItemDetailBody'>
                            <Link to='/cart'>
                                <button className='btn btn-outline-success'>Ir al Carrito</button>
                            </Link>
                            <hr/>
                            <Link to='/'>
                                <button className='btn btn-outline-primary'>Seguir Comprando</button>
                            </Link>
                        </div>
                :   
                
                

                    <ItemCount 
                        stock={products.stock} //aca se define el stock que yo digo
                        initial={1} 
                        onAdd={onAdd}
                    />} 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail