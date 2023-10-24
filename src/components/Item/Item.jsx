import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {
  return (
    <section            
      className='wrapper'
      key={product.id}
    >
      <div className="card cardItem col-md-4" >
        <div className="card-header">
          <p>Terminos y condiciones bajo subscripcion, prohibida la venta a menores de 18 años</p>
          <h3>{`${product.Name}`}</h3>
        </div>
    
        <div className="card-body">
          <img src={product.img} alt='' className='image' />
          <h5>Precio: ${product.Price}</h5>                                                           
        </div>

        <div className="card-footer">                                                        
          <Link to={`/detail/${product.id}`}>
            <button className="btn btn-outline-dark btn-block">
                Ver Producto
            </button>
          </Link>
        </div>
      </div>
    </section>
    
  )
}

export default Item