const productos = [
    {id: "1", nombre: "Teclado Bluetooth", precio: 950, img: "../img/Teclado.jpg", idCat:"2"},
    {id: "2", nombre: "Teclado USB", precio: 400, img: "../img/teclado-usb.jpg", idCat:"2"},
    {id: "3", nombre: "Mouse Bluetooth", precio: 400, img: "../img/mouse-blue.jpg", idCat:"3"},
    {id: "4", nombre: "Mouse USB", precio: 150, img: "../img/mouse-usb.jpg", idCat:"3"}
]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100) 
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}
