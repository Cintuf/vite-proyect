import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList'
import {myPromise} from '../../Products/Tragos';
import './ItemListContainer.css'

export const ItemListContainer = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams() 
  console.log(id)

  useEffect(() => {
    if(id){
      myPromise()
      .then(res => setProduct(res.filter(el => el.category == id)))
      .catch(fail => console.log(fail))
      .finally(() => setLoading(false))
    }
    else{
      myPromise()
        .then(res => setProduct(res))
        .catch(fail => console.log(fail))
        .finally(() => setLoading(false))
    }
  }, [id])

  return (
    <>
    { loading ? 
    <div id="div__loading">
      <img id="img__loading" src="https://acegif.com/wp-content/uploads/loading-13.gif" alt="" />
      <h4 id="text__waiting">Loading</h4>
    </div>
    :
      <ItemList products={products} />
    }
    </>
  )
}