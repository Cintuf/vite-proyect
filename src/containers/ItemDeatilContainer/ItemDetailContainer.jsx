import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState([])
    const {productId} = useParams()
    const [loading, setLoading]=useState(true)
    

    useEffect(()=>{
      const db = getFirestore()
      const queryDoc = doc(db, 'productos', productId)
      getDoc(queryDoc)
      .then(resp => setProduct({id:resp.id, ...resp.data()}))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false))
    },[productId])
    
    
  return (
    <>
    {loading ? <Loading /> : <ItemDetail products={products}/>}
    </>
  )
}

export default ItemDetailContainer