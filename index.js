var qtd_pokemons = 0
var altura = 0
var largura = 0
var vidas = 1
var nivel = 10
var tempo = 10


var nivel = window.location.search
nivel = nivel.replace('?' , '')

var mT =1500

 if(nivel === 'normal'){

    mT =1500

}
else if(nivel === 'dificil'){

    mT =1000
}
else if(nivel === 'Extreme'){

    mT =750
}

function ajustaT(){

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)
}
ajustaT()

var cronometro = setInterval(function(){
    tempo-=1
  if(tempo < 0){
    clearInterval(cronometro)
  
     
    window.location.href = 'Vitoria.html'

    alert("Pokemons Capturados: " + qtd_pokemons)
   

  }
  else{

    document.getElementById("cronometro").innerHTML = tempo

  }

   
}, 1000)


function posicaoP(){
 // remove pokemon anterior
    if(document.getElementById('p')){
        document.getElementById('p').remove()

       //vidas

   if(vidas >  3){

    window.location.href = 'GameOver.html'
    alert("Pokemons Capturados: " + qtd_pokemons)
    
  }
  else{
    document.getElementById('v' + vidas).src = 'imagens/coraçaoVazio.png'

    vidas++
  }
}
   
   //Fazendo as imagens ficarem em posições aleatorias

   var posicaoX = Math.floor(Math.random() * largura) -170
   var posicaoY = Math.floor(Math.random() * altura) -170
  
   posicaoX = posicaoX < 0 ? 0 : posicaoX
   posicaoY = posicaoY < 0 ? 0 : posicaoY
   

   var  pokemons = document.createElement('img')
   

  
 
   pokemons.src = "Imagens/mewtwo.png"
   pokemons.style.left =posicaoX + 'px' 
   pokemons.style.top =posicaoY +  'px' 
   pokemons.style.position = 'absolute'
   pokemons.className = Tam() + ' ' + ladoAleatorio()
    
   pokemons.id ='p'

    pokemons.onclick =function(){
       
        this.remove()
        
         qtd_pokemons++

         
       
    }
    
   document.body.appendChild(pokemons)
   

}

function Tam(){

    var classe = Math.floor(Math.random() * 3)
    switch(classe){

        case 0:
    
        return 'img1'
    
        case 1:
    
        return 'img2'
    
        case 2:
    
        return 'img3'
    
        
    
      }


      
}

function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2)

    switch(classe){

        case 0:
    
        return 'ladoA'
    
        case 1:
    
        return 'LadoB'

    
      }

}


  

     
