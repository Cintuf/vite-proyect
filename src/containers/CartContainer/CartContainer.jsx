import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'
const CartContainer = () => {
  const {cartList, deleteToCard, totalPrice, deleteItem} = useCartContext()
  const addOrder = (e)=>{
    e.preventDefault()
    const order = {}
    order.buyer = {name: 'Mica', phone: '3434662133', email:'palleiromicaela@live.com'}
    order.price = totalPrice()
    order.items = cartList.map(({id, Price, Category}) => ({id, Price, Category}))


    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    
    addDoc(queryCollection, order)
    .then(resp => Swal.fire({
      title: "Compra exitosa",
      text: `Disfruta tu compra, tu id de seguimiento es: ${resp.id}`
      }))
    .catch(err => console.log(err))
    .finally(()=>deleteToCard())


  }

  const handleOnChange = (e)=>{

  }

  return (
    <div id="card" className="card cardCartContainer">
      { cartList.length !==0 ? 
      <>
        {cartList.map(prod=>  <div key={prod.id}>
                                <div className="card-header">
                                  <img src={prod.img} alt="" className="w-25"/>
                                </div>
                                <div className="card-body">
                                  Nombre: {prod.Name} - Categoria: {prod.Category} - Precio: ${prod.Price} - Cantidad: {prod.cant} 
                                  <button className="btn btn-danger" onClick={()=>deleteItem(prod.id)}>X</button>
                                </div>
                              </div> )
      }
                              <div className="card-footer">
                                <h3>El total es: ${totalPrice()} </h3>
                                <button className="btn btn-danger" onClick={deleteToCard}>Vaciar Carrito</button>
                                <button className="btn btn-success btnContBuy" onClick={addOrder}><Link to='/form'>Terminar Compra</Link></button>
                              </div>
      </>
      : 
      <>
        <h2>Carrito Vacio</h2>
        <a href="/"><button className="btn btn-outline-danger btn-block"><Link to='/' >Productos</Link></button></a>
      </>
}
    </div>
  )
}

export default CartContainer