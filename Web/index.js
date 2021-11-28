const botaomenu = document.querySelector('.cabecalho__menu')

const menu = document.querySelector('.menu-lateral')

botaomenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-lateral--ativo')
})

const mudarcor = document.querySelector('.switch')

const body = document.querySelector('.body')
const titulo_pagina = document.querySelector('.titulo-pagina')
const titulo_secao = document.querySelector('.titulo-secao')
const titulo_secao2 = document.querySelector('.titulo-secao2')

mudarcor.addEventListener('click', () =>{
    console.log("teste")
    titulo_pagina.classList.toggle('titulo-claro')
    titulo_secao.classList.toggle('titulo-claro')
    titulo_secao2.classList.toggle('titulo-claro')
    body.classList.toggle('body-claro')
})