const form = document.getElementById('form')
const hotmail= document.getElementById('hotmail')

form.addEventListener('submit', EventoSubmit)

function EventoSubmit (evento){
    evento.preventDefault()
    const formulario = new FormData(this)
    console.log(formulario.get('name'))
    hotmail.setAttribute('href',`mailto:danii-194@hotmail.com?subject=${formulario.get('name')} ${formulario.get('email')}&body=${formulario.get('message')}`)
    hotmail.click()
}