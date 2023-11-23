import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import Greeting from '../../components/Greeting/Greeting'

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams() 

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = collection(db, 'productos')

       
        const queryFilter = category
            ? query(productsCollection, where('Category', '==', category), orderBy('Price', 'asc'), where('isActive', '==', true))
            : productsCollection

        getDocs(queryFilter)
            .then(data => setProducts(data.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [category])

    return (
        <section>
            {loading ?
                <Loading />
                :
                <div>
                    <Greeting saludo={saludo} />
                    <ItemList products={products} />
                </div>
            }
        </section>
    )
}

export default ItemListContainer
