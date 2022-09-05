let usu = 'usuario'
let password = '1234'
let inputusu = document.getElementById('codigo');
let inputpass = document.getElementById('senha');
let resp1 = document.querySelector('.resp1');
let resp2 = document.querySelector('.resp2');
let spsenha = document.querySelector('.spansenha')

function log(){
    
    if(inputusu.value == ''){
        resp1.style.display = 'block'
        resp1.innerHTML = 'it is mandatory to inform a user'

    }else if(inputusu.value === usu){
        inputpass.style.display = 'block'
        spsenha.style.display = 'block'
        resp1.style.display = 'none'
        startpassword()

    }else{
        resp1.style.display = 'block'
        resp1.innerHTML = 'wrong user'
        inputusu.value = ''
    }
}

function startpassword(){
    if(inputpass.value == ''){
        resp2.innerHTML = 'inform the password'
        resp2.style.display = 'block'

    }else if(inputpass.value !== password){
        resp2.style.display = 'block'
        resp2.innerHTML = 'incorrect password'
        inputpass.value = ''
    }else{
        abrirlink()
    }
}

function abrirlink(){
    window.open('bemvindo.html')
}


