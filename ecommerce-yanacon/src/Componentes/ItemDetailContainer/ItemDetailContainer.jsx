import { useEffect, useState } from "react"
import { mFetch, productos } from "../mockFetch/mockFetch"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [productos,setProducts] = useState({})
    const {pid} = useParams()
    

    useEffect(()=>{
        mFetch(Number(pid))
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
    },[])

    return (
        <center>
            <h3>DETALLES</h3>
            <ItemDetail productos={productos}/>
        </center>
    )
}

export default ItemDetailContainer