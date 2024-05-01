let adicionar = document.querySelector('.adicionar-item').addEventListener("click",function(){
    let adicionandoItem=document.querySelector('.adicionando')
    adicionandoItem.style.display="flex"
    let conteiner = document.querySelector('.conteiner')
    conteiner.style.filter='blur(2px)'
    
})
let enviarItem = document.querySelector('.enviar').addEventListener("click",function(){
    event.preventDefault();
    let oque = document.querySelector('.oque').value
    let quando = document.querySelector('.quando').value
    if (oque && quando) {
        let novoItem = document.createElement('div')
        novoItem.classList.add('novoItem')
        let paragrafo1 = document.createElement('p')
        paragrafo1.innerHTML=oque
        let paragrafo2 = document.createElement('p')
        paragrafo2.innerHTML=quando
        let listView = document.querySelector('.list-view')
        novoItem.appendChild(paragrafo1)
        novoItem.appendChild(paragrafo2)
        // listView.innerHTML=novoItem
        listView.appendChild(novoItem)
        document.querySelector('.oque').value=''
        document.querySelector('.quando').value=''
        document.querySelector('.adicionando').style.display='none'
        let conteiner=document.querySelector('.conteiner')
        conteiner.style.filter='blur(0px)'
    }else{
        alert("Erro: Insira Um Valor!")

    }

})
let teste = true
let lista = document.querySelector('.list-view')
let main = document.querySelector('main')
let conteiner = document.querySelector('.conteiner')
let icon = document.querySelector('.gg-moon')
let anoitecer = document.querySelector('.noite')
let tittle = document.querySelector(".tittle")
let listView = document.querySelector('.list-view')
anoitecer.addEventListener("click", function() {
    
    if (teste === true) {
        document.documentElement.style.setProperty('--principal-cor', 'rgb(44, 44, 44)');
        document.documentElement.style.setProperty('--secundaria-cor', 'rgb(70, 70, 70)');
        listView.style.filter='brightness(80%)'
        anoitecer.style.background='black'
        tittle.style.color='white'
        icon.style.color='white'
        teste = false;
    } else {
        document.documentElement.style.setProperty('--principal-cor', '');
        document.documentElement.style.setProperty('--secundaria-cor', '');
        anoitecer.style.background=''
        icon.style.color=''
        tittle.style.color=''
        listView.style.filter=''
        teste = true;
    }
});
// Adiciona evento de clique no botão "Remover"
document.querySelector('.excluir-item').addEventListener("click", function() {
    let listView = document.querySelector('.list-view');
    listView.innerHTML = ''; // Limpa todos os itens da lista
});
