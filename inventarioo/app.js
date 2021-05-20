let miTienda = new inventario();
let id, nombre, cantidad, precio,datos;

datos = document.getElementById('datos');

let btnAgregar = document.getElementById('Add');
btnAgregar.addEventListener('click',()=>{
         id = document.getElementById("id").value;
        nombre = document.getElementById("nombre").value;
        cantidad = document.getElementById("cantidad").value;
        precio = document.getElementById("precio").value;
        if(id !="" && nombre !="" && cantidad !="" && precio !=""){
            let nuevoProducto = new Producto(id, nombre, cantidad, precio);
            agregarNuevoProducto = miTienda.agregar(nuevoProducto);
            if( agregarNuevoProducto){
             datos.innerHTML=nuevoProducto.infoHTML();
             }else
                datos.innerHTML = "Producto con el ID "+id+" ya ingresado";

        }else{

            datos.innerHTML = "Faltan datos por ingresar";
        }

    });

let btnEliminar = document.getElementById('Erase');
btnEliminar.addEventListener('click',()=>{
id = document.getElementById("id").value;
resultado=miTienda.eliminar(id);
if(resultado!=null)
datos.innerHTML = "Producto eliminado";
else
datos.innerHTML = "Producto no encontrado";

})

let btnListar = document.getElementById('checkList');
btnListar.addEventListener('click', ()=>{
    listarInventario=miTienda.listar();
    datos.innerHTML=listarInventario;

}



)
