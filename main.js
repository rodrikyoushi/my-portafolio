
// animacion para el saludo
const ul = document.querySelector(".ul_inicio");
//Funcion que para determinar la animacion
function frames(){
    const animacion = ul.animate([
        //key frames
        {transform: "TranslateY(0px)"},
        {transform: "TranslateY(-100px)"}
    ],{
        //opciones
        easing: "linear",
        iteractions: 1,
        duration: 200 //milisegundos
    });
    return animacion.finished;
}
// la funcion frame nos da una promesa y con displace podemos trabajarla
function displace(){
    frames()
    .then((res)=>{
        // console.log(res)
        ul.appendChild(document.querySelectorAll(".ul_inicio > .li_inicio")[0])
    })
}

// la frecuencia con la que se ejecuta la animacion
setInterval(()=>{
    displace()
},2000)


// #############################
// ### Intersection Observer ###
// #############################
const getTagsWithClassAnim = () => {
    let tags = document.querySelectorAll('.anim')
    return tags
}

const watchThose = (watcher) => {
    const tags = getTagsWithClassAnim()
    for (let tag of tags) {
        watcher.observe(tag)
    }
}

const addNewClassNameThis = (tags, observer) => {
    for (let tag of tags) {
        if (tag.isIntersecting)
            tag.target.classList.add('this')
    }
}

const optionsObs = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.4
}

const watcher = new IntersectionObserver(addNewClassNameThis, optionsObs)
watchThose(watcher)


// Menu hamburguesa
const menu = document.getElementById("menu");
const btnAbrir = document.getElementById("btn_abrir");
const btnCerrar = document.getElementById("btn_cerrar");

btnAbrir.addEventListener("click",()=>{
        menu.classList.add("visible");
})

btnCerrar.addEventListener("click",()=>{
    menu.classList.remove("visible");
})