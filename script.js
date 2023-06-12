function ola(){
    alert('ola')
}

function olaPessoa(nome){
    alert(nome + ' seja bem-vindo')
}

function saudacao(){
    const nome = document.getElementById('nome').value
    alert('ola ' + nome)
    
}

function mouseSobre(){
    alert(' o mouse saiu!')
}

function textoModificado(){
    alert('texto foi alterado')
}

function emFoco(){
    const user = document.getElementById('user')
    user.style.border = '3px solid green'
    user.style.backgroundColor = 'grey'
}

function semFoco(){
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'white'
}