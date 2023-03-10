//Barra de progreso de lectura
let processScroll = () => {
    let docElem = document.documentElement, 
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';
// console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);    
    document.getElementById("barra-progreso").style.setProperty("--scrollAmount", scrollPercent); 
    document.addEventListener('scroll', processScroll);
}
document.addEventListener('scroll', processScroll)
let menuVisible=false;
//Oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList ="";
    menuVisible=false; 
}
//Funcion Animaciones a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distacia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distacia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");

    }
}
//detectar el scrolling para aplicar animacion
window.onscroll=function(){
    efectoHabilidades();
}