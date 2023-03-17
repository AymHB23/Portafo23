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
        document.getElementById("navbar").classList="";
        menuVisible=false;
    }else{
        document.getElementById("navbar").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("navbar").classList ="";
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
/* Mouse
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#0c2d5c", 
    "#11396b",
    "#15467a",
    "#195389",
    "#1c6098", 
    "#1f6ea7", 
    "#237cb6", 
    "#268bc5",
    "#2a99d4", 
    "#2ea8e2", 
    "#33b8f1", 
    "#38c7ff"
];
*/
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
