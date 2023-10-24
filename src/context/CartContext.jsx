import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState, createContext } from "react"
export const CartContext = createContext([])
export const useCartContext = ()=> useContext(CartContext)
export const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])
    

    const addToCard=(products)=>{
        const idx = cartList.findIndex(prod => prod.id === products.id) 
        
        if(idx !== -1){
            cartList[idx].cant += products.cant
            setCartList([ ... cartList ])
        }else{
            setCartList([...cartList, products])
        }
    }

    const deleteToCard=()=>{
        setCartList([])
    }


    const totalPrice = ()=> cartList.reduce((contador, producto)=> contador += (producto.Price * producto.cant), 0)


    const totalCant = ()=> cartList.reduce((contador, producto)=> contador += producto.cant, 0)


    const deleteItem = (id) => {
        setCartList(cartList.filter(prod=> prod.id !== id))
    }

    const addOrder = (e)=>{
        e.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.price = precioTotal()
        order.items = cartList.map(({id, Price, Category, cant}) => ({id, Price, Category, cant}))
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp => Swal.fire({
            title: "Compra Exitosa",
            text: `Disfruta tu compra, tu id de seguimiento es: ${resp.id}`
          }))
        .catch(err => console.log(err))
        .finally(()=>vaciarCarrito())
    }
    const [dataForm, setDataForm]= useState({
        name: '',
        lastname: '',
        phone: '',
        document: '',
        email: '',
        email2: ''
      })
    const handleOnChange = (e)=>{
        console.log('nombre del input: ',(e.target.name))
        console.log('valor del input: ',(e.target.value))
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
      }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCard,
            deleteToCard,
            totalPrice,
            totalCant,
            deleteItem,
            addOrder,
            handleOnChange,
            dataForm,


            

            
            
        }}>

            {children}
        </CartContext.Provider>

    )
} 
