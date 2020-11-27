let contenido = document.querySelector('#contenido');
function traer() {
    fetch('https://randomuser.me/api/') /*<-VAMOS HACER UNA LLAMADA A LA URL QUE  ES UN ARCHIVO JSON*/
                                        /*fetch automaticamente toma el metodo get es leer la url externa y traer algo*/
    .then(res => res.json())    /*Es la respuesta que nos esta trayendo el formato JSON*/
                                /*.then significa traer los datos*/
    .then(data => {             /*Y lueog con esa respuesta con otra promesa la vamos a leer y lo vamos plasmar en CONTENIDO*/
        console.log(data.results['0'])      /*Debemos ingresar al "0" que realmente es el results es sguir un orden de entrada*/
                                            /*Para poder visualizarlo*/
        /*Para acceder a la informacion*/
        contenido.innerHTML = `  
        <img src="${data.results['0'].picture.large}" width="100" class="img-fluid rounded-circle"> 
        <p>Nombre: ${data.results['0'].name.last}</p>
        <p>Correo: ${data.results['0'].email}</p>
        <p>Usuario: ${data.results['0'].login.username}</p>
        <p>Telefono: ${data.results['0'].phone}</p>
        <p>Celular: ${data.results['0'].cell}</p>
        `
        
    })
    
} 