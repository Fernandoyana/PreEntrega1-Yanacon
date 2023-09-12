import React from 'react'
import { productos } from '../../mockFetch/mockFetch'
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({productos}) => {

    const onAdd = (counter) => {
        console.log('Productos seleccionados:', counter);

    }
    return (
        <center key={productos} className='card'>
            <h2></h2>
            <div className='col'>
                <img className=' img' src={productos.imageUrl} alt="imagen"/>
                <p>{productos.name}</p>
                <p><b>${productos.price}</b></p>
            </div>

            <div className='row'>
                <ItemCount initial={1} stock={productos.stock} onAdd={onAdd}/>
            </div>
        </center>
        
    )
}

export default ItemDetail