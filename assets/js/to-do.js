//variável para prevenir que a primeira adição de informação não funcione 
var edit = -1

//function para adição de noticia 
function adicionarnot() {
    //variáveis pegar valor escrito
    var titulo = document.getElementById('titulo').value
    var data = document.getElementById('data').value
    var descricao = document.getElementById('descrição').value
    var autor = document.getElementById('autor').value
    //variável separar a data
    var inteiro = data.split('-')

    //verificar se as caixas de textos estão vazias
    if (titulo == '' || data == '' || descricao == '' || autor == '') {
        alert('insira valor valido')
    } 
    //verifica se o botão de editar foi apertado (caso for falso)
    else if (edit < 0) {
        //puxando os intens escritos para uma array
        dias.push(inteiro[2])
        meses.push(inteiro[1])
        anos.push(inteiro[0])
        titulos.push(titulo)
        datas.push(data)
        descricoes.push(descricao)
        autores.push(autor)

     //esvaziando variaveis
        titulo = ''
        data = ''
        descricao = ''
        autor = ''
    
        //esvaziando as caixas de texto
        document.getElementById('titulo').value = ''
        document.getElementById('data').value = ''
        document.getElementById('descrição').value = ''
        document.getElementById('autor').value = ''

        //array dos textos adicionados
        text[i] = `<section class="noticiToDo" id="noticia${i}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[i]}</h1><h5 class="titlesno">Data: ${dias[i]}/${meses[i]}/${anos[i]}</h5><p class="titlesno">Descrição: ${descricoes[i]}</p><h4 class="titlesno">Autor: ${autores[i]}</h4><button class="butdel" onclick="deletar(${i})">Deletar 🗑️</button><button class="butedit" onclick="editar(${i})">Editar ✏️</button></div></section>`

        //adicionar outros textos
        document.getElementById(`todos`).innerHTML = `${text.reverse().join(" ")}`;
        i++
    }

//verifica se o botão de editar foi apertado (caso verdadeiro)
    if (edit > -1 ) {
        //puxando os intens escritos para uma array
        dias[edit] = inteiro[2]
        meses[edit] = inteiro[1]
        anos[edit] = inteiro[0]
        titulos[edit] = titulo
        datas[edit] = data
        descricoes[edit] = descricao
        autores[edit] = autor

        //esvaziando as caixas de texto
        document.getElementById('titulo').value = ''
        document.getElementById('data').value = ''
        document.getElementById('descrição').value = ''
        document.getElementById('autor').value = ''

         //array dos textos adicionados
        text[edit] = `<section class="noticiToDo" id="noticia${edit}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[edit]} - editado</h1><h5 class="titlesno">Data: ${dias[edit]}/${meses[edit]}/${anos[edit]}</h5><p class="titlesno">Descrição: ${descricoes[edit]}</p><h4 class="titlesno">Autor: ${autores[edit]}</h4><button class="butdel" onclick="deletar(${edit})">Deletar 🗑️</button><button class="butedit" onclick="editar(${edit})">Editar ✏️</button></div></section>`
       
       //adicionar outros textos
        document.getElementById(`todos`).innerHTML = `${text.join(' ')}`

        //variável para completar 
        edit = -1
    }
}

//declaração de variáveis
var titulos = []
var datas = []
var descricoes = []
var autores = []
var i = 0
var text = []
var dias = []
var meses = []
var anos = []

//function para deletar
function deletar(x) {

    //esvazia a posição que deseja deletar
    dias[x] = ''
    meses[x] = ''
    anos[x] = ''
    titulos[x] = ''
    datas[x] = ''
    descricoes[x] = ''
    autores[x] = ''
    text[x] = ''

    //fazer desaparecer o item desejado
    document.getElementById(`noticia${x}`).style.display = 'none'
}

//fuction para editar o item desejado 
function editar(y) {
    document.getElementById('titulo').value = titulos[y]
    document.getElementById('data').value = datas[y]

    document.getElementById('descrição').value = descricoes[y]
    document.getElementById('autor').value = autores[y]
    edit = y

    text[y] = `<section class="noticiToDo" id="noticia${y}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[y]}</h1><h5 class="titlesno">Data: ${datas[y]}</h5><p class="titlesno">Descrição: ${descricoes[y]}</p><h4 class="titlesno">Autor: ${autores[y]}</h4><button class="butdel" onclick="deletar(${y})">Deletar 🗑️</button><button class="butedit" onclick="editar(${y})">Editar ✏️</button></div></section>`
}
