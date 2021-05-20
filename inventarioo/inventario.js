class inventario{
    constructor(){
        this.datos=[];
        console.log(this.datos);
        console.log(this.datos.length);
    }
    agregar(nuevo){
        console.log(this.datos.length);
        if(this.datos.length==0)
        {
             this.datos.push(nuevo);
             return true;
        }
        else if(this.datos.length>0){
            console.log(this.datos.length); 
            console.log(nuevo.id);

            for(let i=0;i<this.datos.length;i++)
            {
                if (this.datos[i].id===nuevo.id){
                
                console.log(this.datos);
                return false; //no se ingresan datos al vector
                
                }
            }
            this.datos.push(nuevo);
            return true;   //se ingresan datos al vector

        }
        
    }

    eliminar(id){
        for(let i=0;i<this.datos.length;i++)
        {
            if (this.datos[i].id===id){
            this.datos.splice(i,1);
            console.log(this.datos);
            return true;

            }

        }
        console.log(this.datos);
    }

    listar(){
        let listado ="";
        for(let i=0;i<this.datos.length;i++)
        {
            listado+=this.datos[i].infoHTML(); //info usado para guardar datos como una cadena de datos en lugar de un objeto
            
        }
        return listado;


    }

}