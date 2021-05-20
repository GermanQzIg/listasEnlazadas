class nodo{
    constructor(id, nombre, cantidad, precio, siguiente,anterior){
        this.id= id;
        this.nombre= nombre;
        this.cantidad= cantidad;
        this.precio= precio;
        this.siguiente= siguiente;
        this.anterior= anterior;
    }


}

class listaDobleEnzalada{
    constructor(){
        this.cabeza=null;
        this.cola=null;
        this.size= 0;
        
        
    }

    agregar(id, nombre, cantidad, precio){
        const nuevoNodo = new nodo(id, nombre, cantidad, precio, this.cabeza, null);
        if(this.cabeza){
            nuevoNodo.siguiente=this.cabeza;
            this.cabeza.anterior=nuevoNodo;
            this.cabeza=nuevoNodo;
        }
        else{
            this.cola=nuevoNodo
            this.cabeza=nuevoNodo
        }



    }
    imprimir(){
       let valorActual=this.cabeza;
        let resultado="";
        while(valorActual){
            resultado+=valorActual.id+" "+valorActual.nombre+" "+valorActual.cantidad+" $"+valorActual.precio+" <-> ";
            valorActual=valorActual.siguiente;

        }
        return resultado;
    }

}

const listaEnlazada = new listaDobleEnzalada();
listaEnlazada.agregar(1,"refresco",3,45);
listaEnlazada.agregar(2,"fanta",4,56);
console.log(listaEnlazada.imprimir());


