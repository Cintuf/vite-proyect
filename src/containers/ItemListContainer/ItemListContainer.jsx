mport { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'



import Greeting from '../../components/Greeting/Greeting'
const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryFilter = id ? query(queryCollection, where('Category', '==', 'id'), orderBy('Price', 'asc'), where('isActive', '==', true)) : queryCollection

        getDocs(queryFilter)
            .then(data => setProducts(data.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [id])

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
