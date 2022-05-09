let ota = document.querySelector('.list')
let qizil = document.querySelector('.qizil')
let sariq = document.querySelector('.sariq')
let yashil = document.querySelector('.yashil')


setInterval( ()=> {
    if (qizil.classList.length === 2) {
        qizil.classList.remove('stop') 
        sariq.classList.add('stop')
        yashil.classList.add('stop')
    } else if (sariq.classList.length === 2) {
        qizil.classList.add('stop', 'stop1')
        sariq.classList.remove('stop')
        yashil.classList.add('stop1')
    } else if (yashil.classList.length === 3){
        yashil.classList.remove('stop','stop1')
        qizil.classList.remove('stop1')
        sariq.classList.add('stop')
    } else if (yashil.classList.length === 1) {
        qizil.classList.add('stop')
        sariq.classList.add('stop')
        yashil.classList.add('stop') 
    }
}, 1000);