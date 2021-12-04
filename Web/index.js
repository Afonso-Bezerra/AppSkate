const botaomenu = document.querySelector('.cabecalho__menu')

const menu = document.querySelector('.menu-lateral')

botaomenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-lateral--ativo')
})

function gopico(){
    window.location = "./picos.html"
}

function govideo(){
    window.location = "./video.html"
}
