
import { useEffect, useState } from "react"

// const useCounter = (min, max) => {
//     const [counter, setCounter] = useState(initial)

//     const handleAdd = () => {
//         if(count < max) {
//             setCount(count + 1)
//         }
//     }

//     const handleSubtract = () => {
//         if(count > min) {
//             setCount(count - 1)
//         }
//     }

//     return {
//         count,
//         handleAdd,
//         handleSubtract
//     }
// }

// un re-render se produce con un cambio de estado o de props - evento
const ItemCount = ({initial, stock, onAdd}) => { 
    const [counter, setCounter] = useState(initial)

    const handleAdd = () => {
        if(counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleSubtract = () => {
        if(counter > initial) {
            setCounter(counter - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(counter)
    }
    
    return (
        <center>
            <div> 
                    <button onClick={handleSubtract}> - 1 </button>
                <label>
                    <strong>{ counter }</strong>
                </label>
                    <button onClick={handleAdd}> + 1 </button> <br/>
                <button onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </center>
    )
} 

export default ItemCount