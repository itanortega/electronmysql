const remote = require('electron').remote
const main = remote.require('./main.js')

let button = document.createElement('button')
button.textContent = "Open Window"
document.body.appendChild(button)

button.addEventListener('click', ()=> {
  main.openWindow()
})

$(function(){
  const os = require('os')
  const prettyBytes = require('pretty-bytes')

  $('.stats').append('Número de procesadores: <span>' + os.cpus().length + '</span>')
  $('.stats').append('  Memoria libre: <span>' + prettyBytes(os.freemem()) + '</span>')
});