import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {

  const {totalCant} = useCartContext()
  return (
    <div>
        <i>
          <img src="/carrito.ico" alt="" />{totalCant()!==0 && totalCant()}
        </i>

    </div>
  )
}

export default CartWidget