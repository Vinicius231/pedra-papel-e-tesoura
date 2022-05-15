var resultado = document.getElementById('resultado')
var resu = document.getElementById('resu')
var resu2 = document.getElementById('resu2')
var jogador = document.getElementById('jogador')
var computador = document.getElementById('computador')
var joga = 0 
var pc = 0 

function pedra(){
    var aleatorio = Math.floor(Math.random()*3)
    if(aleatorio==0){
        resultado.innerHTML = 'Empate'
        resultado.style.color = 'black'
        resu.innerHTML = '<img src="img/pedradire.png" width="50px">'
        resu2.innerHTML = '<img src="img/pedraesq.png" width="50px">'
    } else if(aleatorio==1){
        pc++
        resultado.innerHTML='Você perdeu!'
        resultado.style.color = 'red'
        resu.innerHTML = '<img src="img/pedradire.png" width="50px">'
        resu2.innerHTML = '<img src="img/papelesq.png" width="50px">'
        computador.innerHTML = pc
    } else{
        joga++
        resultado.innerHTML = 'Você ganhou!'
        resultado.style.color = 'green'
        resu.innerHTML = '<img src="img/pedradire.png" width="50px">'
        resu2.innerHTML = '<img src="img/tesouraesq.png" width="50px">'
        jogador.innerHTML = joga
    }
}
function papel(){
    var aleatorio = Math.floor(Math.random()*3)
    if (aleatorio==0){
        joga++
        resultado.innerHTML = 'Você ganhou!'
        resultado.style.color = 'green'
        resu.innerHTML = '<img src="img/papeldire.png" width="50px">'
        resu2.innerHTML = '<img src="img/pedraesq.png" width="50px">'
        jogador.innerHTML = joga
    } else if(aleatorio==1){
        resultado.innerHTML = 'Empate'
        resultado.style.color = 'black'
        resu.innerHTML = '<img src="img/papeldire.png" width="50px">'
        resu2.innerHTML = '<img src="img/papelesq.png" width="50px">'
    } else{
        pc++
        resultado.innerHTML = 'Você perdeu!'
        resultado.style.color = 'red'
        resu.innerHTML = '<img src="img/papeldire.png" width="50px">'
        resu2.innerHTML = '<img src="img/tesouraesq.png" width="50px">'
        computador.innerHTML = pc
    }
}
function tesoura(){
    var aleatorio = Math.floor(Math.random()*3)
    if(aleatorio==0){
        pc++
        resultado.innerHTML = 'Você perdeu!'
        resultado.style.color='red'
        resu.innerHTML = '<img src="img/tesouradire.png" width="50px">'
        resu2.innerHTML = '<img src="img/pedraesq.png" width="50px">'
        computador.innerHTML = pc;
    } else if(aleatorio==1){
        joga++
        resultado.innerHTML = 'Você ganhou!'
        resultado.style.color='green'
        resu.innerHTML = '<img src="img/tesouradire.png" width="50px">'
        resu2.innerHTML = '<img src="img/papelesq.png" width="50px">'
        jogador.innerHTML = joga
    } else{
        resultado.innerHTML = 'Empate'
        resultado.style.color='black'
        resu.innerHTML = '<img src="img/tesouradire.png" width="50px">'
        resu2.innerHTML = '<img src="img/tesouraesq.png" width="50px">'
    }
}
