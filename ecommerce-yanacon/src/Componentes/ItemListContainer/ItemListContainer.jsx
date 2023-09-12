import { useEffect, useState } from "react"
import  {mFetch, productos } from "../mockFetch/mockFetch"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()
    console.log(cid);

    useEffect(()=>{
        if (cid) {
            mFetch()
            .then(respuesta => setProducts(respuesta.filter(productos => cid === productos.category)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
            
        } else {
            mFetch()
            .then(respuesta => setProducts(respuesta))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [cid])

    // useEffect(()=> {
    //     const url = ''
    //     fetch()
    // }, [])

    

    return (
        <div className="body-card">
            {loading ? <h2>Cargando...</h2> 
                : 
                <ItemList productos={productos}/>
        }
        </div>
    )
}
export default ItemListContainer