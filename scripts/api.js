function cambiar_imagen(){
   let url="https://dog.ceo/api/breeds/image/random";
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        let imagen=document.getElementById("imagen");
        imagen.src=data["message"];
    }).catch(function(error){
        console.log(error);
    }); 
}

let cambiar=document.getElementById("cambiar");
cambiar.addEventListener("click", cambiar_imagen);
