   const sectionSeleccionarAtaque=document.getElementById
   ('seleccionar-ataque')
   const sectionReiniciar=document.getElementById('reiniciar')
   const botonMascotaJugador = document.getElementById('boton-mascota')
   const botonReiniciar= document.getElementById('boton-reiniciar')
   sectionReiniciar.style.display='none'
   const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
   const spanMascotaJugador = document.getElementById('mascota-jugador')
   const spanMascotaEnemigo=document.getElementById('mascota-enemigo')
   const spanVidasJugador=document.getElementById('vidas-jugador')
   const spanVidasEnemigo=document.getElementById('vidas-enemigo')
   const sectionMensajes=document.getElementById('resultado')
   const ataquesDelJugador=document.getElementById('ataques-del-Jugador')
   const ataquesDelEnemigo=document.getElementById('ataques-del-enemigo')
   const contenedorTarjetas=document.getElementById('contenedorTarjetas')
   const contenedorAtaques=document.getElementById('contenedorAtaques')

   const sectionVerMapa=document.getElementById('ver-mapa')
   const mapa = document.getElementById('mapa')

let Mokepones=[]
let ataqueJugador=[]
let ataqueEnemigo=[]
let opcionDeMokepones

let inputHipodoge 
let inputCapipepo
let inputRatigueya
let inputMorgo  
let inputNude  
let inputCrac  
let mascotaJugador
let mascotaJugadorObjeto
let AtaquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra 
let botonViento
let botonRayo
let botones=[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0
let vidasJugador=3
let vidasEnemigo=3
let lienzo=mapa.getContext("2d")
let intervalo
let mapaBackground=new Image()
mapaBackground.src='./Stilo/fondo-juego-espacial-paisaje-alienigena-noche-neon_107791-1624.avif'
let alturaQueBuscamos
//para conseguir el ancho de la pantalla se pone el"window.innerWidth"-20 para que tenga espacio y no tome toda la pantalla
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 350
//esto hace q si nuestra pantalla sea completa nuestro ancho de nuestro mapa no sea muy grande y se maximo hasta 350
if(anchoDelMapa>anchoMaximoDelMapa){
    anchoDelMapa=anchoMaximoDelMapa-20
}
alturaQueBuscamos=anchoDelMapa*600/800
mapa.width=anchoDelMapa
mapa.height=alturaQueBuscamos
//canva mas grande
class Mokepon{
    constructor(nombre,foto,vida,fotoMapa){//si no paso los valores entonces se pone por defecto
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
        this.ancho=40
        this.alto=40
        //ubicando aleatoriamente a nuestro mokepon
        this.x=aleatorio(0,mapa.width-this.ancho)//igualando el valor a el parametro ya declarado
        this.y=aleatorio(0,mapa.height-this.alto)
        this.mapaFoto=new Image()
        this.mapaFoto.src=fotoMapa
        this.velocidadx=0
        this.velocidady=0
    }
/*si queremos pintar el mokepon usamos los "metodos de las clases" asi como las clases
tienen un constructor nosotros podemos definir otras funciones para
llamar de esas clases*/
//para pintar en todos
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
         )
    }
}
let hipodoge=new Mokepon('Hipodoge','./Stilo/Artwork.webp',5,'./Stilo/Artwork2.png')
let capipepo=new Mokepon('Capipepo','./Stilo/Eminencia.png',5,'./Stilo/Eminencia2.png')
let ratigueya=new Mokepon('Ratigueya','./Stilo/Medusa.webp',5,'./Stilo/Medusa2.png')
let morgo=new Mokepon('Morgo','./Stilo/Press.jpg',5,'./Stilo/Press2.jpg')
let Nude=new Mokepon('Nude','./Stilo/Fondo.jpeg',5,'./Stilo/Fondo2.jpeg')
let Crac=new Mokepon('Crac','./Stilo/Abyys.jpg',5,'./Stilo/Abyys2.jpg')

//mascotas enemigo
let hipodogeEnemigo=new Mokepon('Hipodoge','./Stilo/Artwork.webp',5,'./Stilo/Artwork2.png')
let capipepoEnemigo=new Mokepon('Capipepo','./Stilo/Eminencia.png',5,'./Stilo/Eminencia2.png')
let ratigueyaEnemigo=new Mokepon('Ratigueya','./Stilo/Medusa.webp',5,'./Stilo/Medusa2.png')
let morgoEnemigo=new Mokepon('Morgo','./Stilo/Press.jpg',5,'./Stilo/Press2.jpg')
let NudeEnemigo=new Mokepon('Nude','./Stilo/Fondo.jpeg',5,'./Stilo/Fondo2.jpeg')
let CracEnemigo=new Mokepon('Crac','./Stilo/Abyys.jpg',5,'./Stilo/Abyys2.jpg')
hipodoge.ataques.push(
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🌱' ,id:'boton-tierra'},
)
hipodogeEnemigo.ataques.push(
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🌱' ,id:'boton-tierra'},
)
capipepo.ataques.push(
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
)
capipepoEnemigo.ataques.push(
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
)
ratigueya.ataques.push(
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🔥' ,id:'boton-fuego'},
)
ratigueyaEnemigo.ataques.push(
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🔥' ,id:'boton-fuego'},
)
morgo.ataques.push(
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🌬️' ,id:'boton-viento'},// Nuevo ataque
    {nombre:'🌬️' ,id:'boton-viento'},
)
morgoEnemigo.ataques.push(
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🌬️' ,id:'boton-viento'},// Nuevo ataque
    {nombre:'🌬️' ,id:'boton-viento'},
)
Nude.ataques.push(
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🌱' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🔥' ,id:'boton-fuego'},
)
NudeEnemigo.ataques.push(
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🌱' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
    {nombre:'🔥' ,id:'boton-fuego'},
)
Crac.ataques.push(
    {nombre:'⛈️' ,id:'boton-rayo'},//Nuevo ataque
    {nombre:'⛈️' ,id:'boton-rayo'},
    {nombre:'🌱' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
)
CracEnemigo.ataques.push(
    {nombre:'⛈️' ,id:'boton-rayo'},//Nuevo ataque
    {nombre:'⛈️' ,id:'boton-rayo'},
    {nombre:'🌱' ,id:'boton-agua'},
    {nombre:'💧' ,id:'boton-agua'},
    {nombre:'🔥' ,id:'boton-fuego'},
    {nombre:'🌱' ,id:'boton-tierra'},
)
Mokepones.push(hipodoge,capipepo,ratigueya,morgo,Nude,Crac)

function iniciarJuego() {
   
    sectionSeleccionarAtaque.style.display='none'
    sectionVerMapa.style.display ='none'
  
    Mokepones.forEach((Mokepon)=>{
        opcionDeMokepones=`
        <input type="radio" name="mascota" id=${Mokepon.nombre} />
                <label class="tarjeta-de-Hipoge" for =${Mokepon.nombre}>
                    <p>${Mokepon.nombre}</p>
                    <img src=${Mokepon.foto} alt=${Mokepon.nombre} >
                </label>
        `
        contenedorTarjetas.innerHTML+=opcionDeMokepones

        inputHipodoge=document.getElementById('Hipodoge')
        inputCapipepo=document.getElementById('Capipepo')
        inputRatigueya=document.getElementById('Ratigueya')
        inputMorgo=document.getElementById('Morgo') //
        inputNude=document.getElementById('Nude')
        inputCrac=document.getElementById('Crac')//
    })
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
  // iniciar el ataque cuando se choquen eso sucede en revisioncolision 
  //trasladamos:sectionSeleccionarAtaque.style.display='flex'
   
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML =inputHipodoge.id
        mascotaJugador=inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML =inputCapipepo.id
        mascotaJugador=inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML =inputRatigueya.id
        mascotaJugador=inputRatigueya.id
    }else if(inputMorgo.checked){  
        spanMascotaJugador.innerHTML=inputMorgo.id  
        mascotaJugador=inputMorgo.id
    }else if(inputNude.checked){
        spanMascotaJugador.innerHTML=inputNude.id
        mascotaJugador=inputNude.id
    }else if(inputCrac.checked){
        spanMascotaJugador.innerHTML=inputCrac.id
        mascotaJugador=inputCrac.id   
    } else {
        alert('Selecciona una mascota')
    }
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display='flex'
    iniciarMapa()
   
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < Mokepones.length; i++) {
        if(mascotaJugador === Mokepones[i].nombre){
        ataques=Mokepones[i].ataques
       }
     }

        mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{
        AtaquesMokepon=`
    <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
     `
     contenedorAtaques.innerHTML += AtaquesMokepon
    })
     botonFuego= document.getElementById('boton-fuego')
     botonAgua=document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botonViento= document.getElementById('boton-viento')//
     botonRayo= document.getElementById('boton-rayo')//
     botones = document.querySelectorAll('.BAtaque')
}
function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click',(e)=>{
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#B9F3FC'
                boton.disabled=true

            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#B9F3FC'
                boton.disabled=true
            }else if(e.target.textContent==='🌬️'){///
                ataqueJugador.push('VIENTO')
                console.log(ataqueJugador)
                boton.style.background = '#B9F3FC'
                boton.disabled=true
            }else if(e.target.textContent==='⛈️'){ ///
                ataqueJugador.push('RAYO')
                console.log(ataqueJugador)
                boton.style.background = '#B9F3FC'
                boton.disabled=true
            }
            else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#B9F3FC'
                boton.disabled=true
            }
            ataqueAleatorioEnemigo()
        })
    })
   
}
function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
    /*  al recibir el parametro enemigo, tiene acceso a todo los datos del mokepon, por que enemigo es un objeto.*/
    /*let mascotaAleatorio=aleatorio(0,Mokepones.length-1)
    spanMascotaEnemigo.innerHTML=Mokepones[mascotaAleatorio].nombre
    ataquesMokeponEnemigo=Mokepones[mascotaAleatorio].ataques
    secuenciaAtaque()*/
}

function ataqueAleatorioEnemigo(){
    console.log('Ataques enemigo',ataquesMokeponEnemigo)
    let ataqueAleatorio=aleatorio(0,ataquesMokeponEnemigo.length-1)
    let enemigo=ataquesMokeponEnemigo[ataqueAleatorio].nombre
    if(enemigo=='🔥'){
        ataqueEnemigo.push('FUEGO')
    }else if(enemigo=='💧'){
        ataqueEnemigo.push('AGUA')
    }else if(enemigo=='🌬️'){
        ataqueEnemigo.push('VIENTO')//
    }else if(enemigo=='⛈️'){
        ataqueEnemigo.push('TRUENO')//
    }
    else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}
function iniciarPelea(){
    if(ataqueJugador.length===6){
        combate()
    }
}
function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador=ataqueJugador[jugador]
    indexAtaqueEnemigo=ataqueEnemigo[enemigo]
}
function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index]===ataqueEnemigo[index]){
        indexAmbosOponentes(index,index)
        crearMensaje("EMPATE")
    }
         else if(ataqueJugador[index] ==='FUEGO' && ataqueEnemigo[index]==='TIERRA'){ 
        indexAmbosOponentes(index,index)
        crearMensaje("GANASTE")   
        victoriasJugador++
        spanVidasJugador.innerHTML=victoriasJugador      
         }else if(ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index]==='FUEGO'){
        indexAmbosOponentes(index,index)
        crearMensaje("GANASTE")  
        victoriasJugador++
         spanVidasJugador.innerHTML=victoriasJugador    
    }
        else if(ataqueJugador[index] ==='TIERRA' && ataqueEnemigo[index]==='AGUA'){
        indexAmbosOponentes(index,index)
        crearMensaje("GANASTE")   
        victoriasJugador++
         spanVidasJugador.innerHTML=victoriasJugador         
    }else if(ataqueJugador[index] ==='VIENTO' && ataqueEnemigo[index]==='TRUENO'){////
        indexAmbosOponentes(index,index)
        crearMensaje("GANASTE")   
        victoriasJugador++
         spanVidasJugador.innerHTML=victoriasJugador     
    }else if(ataqueJugador[index] ==='TRUENO' && ataqueEnemigo[index]==='VIENTO'){///
        indexAmbosOponentes(index,index)
        crearMensaje("GANASTE")   
        victoriasJugador++
         spanVidasJugador.innerHTML=victoriasJugador     
    }
         else{
        indexAmbosOponentes(index,index)
        crearMensaje("PERDISTE")
        victoriasEnemigo++
        spanVidasEnemigo.innerHTML=victoriasEnemigo
    }

    }
   
    revisarVictorias()//rrrrrrrrrrrrr
}
function revisarVictorias(){
    if(victoriasJugador===victoriasEnemigo){
    crearMensajeFinal('Esto fue un empate!!!')
    }else if(victoriasJugador >victoriasEnemigo){
    crearMensajeFinal('FELICITACIONES! Ganaste :)')
    }else{
    crearMensajeFinal('Lo siento, perdiste:(')
    }
}
function crearMensaje(resultado){
   
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo=document.createElement('p')

    sectionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=indexAtaqueEnemigo
    //let parrafo=document.createElement('p')
    //parrafo.innerHTML='Tu mascota ataco con '+ ataqueJugador +' la mascota del enemigo ataco con '+ ataqueEnemigo + ' - ' + resultado
  
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){

   
    sectionMensajes.innerHTML=resultadoFinal

    sectionReiniciar.style.display='block'
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//crtl+f busca las palabras iguales
function pintarCanvas(){

    mascotaJugadorObjeto.x=mascotaJugadorObjeto.x+mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y=mascotaJugadorObjeto.y+mascotaJugadorObjeto.velocidady
    lienzo.clearRect(0,0,mapa.width,mapa.height)//limpia el lienzo
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    //Lllamando pintarMokepon para q pintemos el mokepon'
    mascotaJugadorObjeto.pintarMokepon()
    //pinta al mokepon en nuestro lienxo y lo llamamos
    //pintando personajes del enemigo
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    morgoEnemigo.pintarMokepon()
    NudeEnemigo.pintarMokepon()
    CracEnemigo.pintarMokepon()
  //revisando las colisiones si nuestra mascota se esta moviendo y colisionando
    if(mascotaJugadorObjeto.velocidadx !==0 || mascotaJugadorObjeto.velocidady!==0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(morgoEnemigo)
        revisarColision(NudeEnemigo)
        revisarColision(CracEnemigo)
    }
}
function moverDerecha(){
   mascotaJugadorObjeto.velocidadx=5
}
function moverIzquierda(){
   mascotaJugadorObjeto.velocidadx=-5
}
function moverAbajo(){
   mascotaJugadorObjeto.velocidady=5
}
function moverArriba(){
   mascotaJugadorObjeto.velocidady=-5
}
function detenerMovimiento(){
    
   mascotaJugadorObjeto.velocidadx=0
   mascotaJugadorObjeto.velocidady=0
}
//evento objeto q dice q tecla se presiono
//este nos sirve por q si presionamos x nos saldra q consola q presionamosx
function sePresionoUnaTecla(event){
    //hacer varias condicionales if juntoa como un sandwicth if
   switch (event.key) {//valor q se usara para comparar'key'
    case 'ArrowUp':      //valor con el que queremos compararel key q pasamos
        moverArriba()
        break;
    case 'ArrowDown':
        moverAbajo()
        break;
    case 'ArrowLeft':
        moverIzquierda()
        break;
    case 'ArrowRight':
        moverDerecha()
        break;
    default:
        break;
   }
}
function iniciarMapa(){
    mascotaJugadorObjeto=obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto,mascotaJugador)//si en el console.long se pone " , "puede imprimir otras cosas
    intervalo=setInterval(pintarCanvas,50)//espera el tiempo para tener movimiento cada cuanto se ejecuta la funcion
    window.addEventListener('keydown',sePresionoUnaTecla)
    window.addEventListener('keyup',detenerMovimiento)
}
function obtenerObjetoMascota(){
    for(let i=0;i<Mokepones.length;i++){
        if(mascotaJugador===Mokepones[i].nombre){
            return Mokepones[i]
        }
    }
}
//FUCNION COLISION
function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo=enemigo.x + enemigo.ancho
    const izquierdaEnemigo =enemigo.x

    const arribaMascota=mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota=mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota=mascotaJugadorObjeto.x
    if(
        abajoMascota<arribaEnemigo ||
        arribaMascota > abajoEnemigo||
        derechaMascota<izquierdaEnemigo ||
        izquierdaMascota>derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)//limpiar el ejecutamiento q se hace que se detenga el intervalo
    //MOSTRANDO ATAQUE CUANDO HAY UNA COLISION
    console.log('Se detecto una colision');
    sectionSeleccionarAtaque.style.display='flex'
    sectionVerMapa.style.display ='none'
    seleccionarMascotaEnemigo(enemigo)
    //luchando y poniendo en nombre del enemigo con el que colisiono
}
window.addEventListener('load', iniciarJuego)

