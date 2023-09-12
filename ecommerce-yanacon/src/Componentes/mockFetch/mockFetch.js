export const productos = [
    {id: 1, name: 'Adidas Superstar',category: 'zapatillas', price: 9000, stock: 5, imageUrl: 'https://essential.vtexassets.com/arquivos/ids/933971/261-4002_1.jpg?v=638235641536730000'},
    {id: 2, name: 'Converse All Star HI',category: 'zapatillas', price: 3000, stock: 7, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqqp6XBSyKzUxvrvS_JLrkQ5kFJh2GepyWg&usqp=CAU'},
    {id: 3, name: 'Nike Air Force 1',category: 'zapatillas', price: 9000, stock: 9, imageUrl: 'https://essential.vtexassets.com/arquivos/ids/934821/316-0612_1.jpg?v=638235646962170000'},
    {id: 4, name: 'Vans Old School',category: 'zapatillas', price: 5000, stock: 2, imageUrl: 'https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2023/6/8/8463164.jpg'},
    {id: 5, name: 'Buzo Thrasher',category: 'indumentaria', price: 7000, stock: 4, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXzeuMYelh8xmalvaoK4meuReymHQ0qqdaw&usqp=CAU'}
]

export const mFetch = (pid) => new Promise ((res, rej)=>{
    // let condicion = true


        setTimeout(()=>{
            res(pid ? productos.find( productos => productos.id === pid) : productos)
        },2000)
        
})
// export const mFetchOne = () => new Promise ((res, rej)=>{
//     let condicion = true

//     if(condicion){
//         setTimeout(()=>{
//             res(productos)
//         },2000)
        

//     }else{
//         rej('No se te devolvio la plata por gil')
//     }
// })

