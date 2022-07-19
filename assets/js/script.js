function trocarCor(){
    const lista = ['red', 'blue', 'yellow', 'green', 'purple', 'brown', 'orange', 'pink', 'gray'];
    const listaTraduzida = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo', 'marrom', 'laranja', 'rosa', 'cinza']
    const seletor = Math.floor(Math.random()*9);

    document.getElementById('tela').style.backgroundColor = `${lista[seletor]}`;
    document.getElementById('cor').innerHTML = `${listaTraduzida[seletor]}`;
    
}