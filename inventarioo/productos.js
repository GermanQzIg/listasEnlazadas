class Producto{
    constructor(id, nombre, cantidad, precio){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    infoHTML(){
        return `<div>
        <h1>ID: ${this.id}</h1>
        <p>Nomber: ${this.nombre}</p>
        <p>Cantidad: ${this.cantidad}</p>
        <p>Precio: ${this.precio}</p>
        </div>`;
    }

    info(){
        return "id "+ this.id+ "<br>"+ " Nombre "+ this.nombre+ "<br>"+" Cantidad "+ this.cantidad+ "<br>"+" Precio "+ this.precio+ "<br>"+ "<br>"; 

    }
}