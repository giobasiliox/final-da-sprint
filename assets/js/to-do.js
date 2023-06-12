var edit = -1
var hoje = new Date()
var diak = hoje.getDate() - 1
var mesk = hoje.getMonth() + 1
var anok = hoje.getFullYear()
var atual = new Date(`${anok}-${mesk}-${diak}`)





//function para adição de noticia 
function adicionarnot() {
    //variáveis pegar valor escrito
    var titulo = document.getElementById('titulo').value
    var data = document.getElementById('data').value
    var descricao = document.getElementById('descrição').value
    var autor = document.getElementById('autor').value
    var categoria = document.getElementById('categoria').value
    //variável separar a data
    var inteiro = data.split('-')

    //verificar se as caixas de textos estão vazias
    if (titulo == '' || data == '' || descricao == '' || autor == '' || new Date(data) < new Date(atual) || categoria == '') {
        if (titulo == '') {
            alert('Insira um titulo!')
        }
        if (data == '') {
            alert('Insira uma data!')
        }
        if (descricao == '') {
            alert('Insira uma descrição!')
        }
        if (autor == '') {
            alert('Insira um autor')
        }
        if (new Date(data) < new Date(atual)) {
            alert('Insira uma data valida!')
        }
        if (categoria == '') {
            alert('Escolha uma categoria!')
        }
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
        categorias.push(categoria)

        //esvaziando variaveis
        titulo = ''
        data = ''
        descricao = ''
        autor = ''
        categoria = ''

        //esvaziando as caixas de texto
        document.getElementById('titulo').value = ''
        document.getElementById('data').value = ''
        document.getElementById('descrição').value = ''
        document.getElementById('autor').value = ''
        document.getElementById('categoria').value = ''

        //array dos textos adicionados
        text[i] = `<section class="noticiToDo" id="noticia${i}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[i]}</h1><h2 class="titlesno">Categoria: ${categorias[i]}</h2><h5 class="titlesno">Data: ${dias[i]}/${meses[i]}/${anos[i]}</h5><p class="titlesno">Descrição: ${descricoes[i]}</p><h4 class="titlesno">Autor: ${autores[i]}</h4><div class="flexin"><button class="butdel" onclick="deletar(${i})">Deletar 🗑️</button><button class="butedit" onclick="editar(${i})">Editar ✏️</button> <p class="rightjo" id="new${i}">new</p></div></div></section>`
        //adicionar outros textos
        document.getElementById(`todos`).innerHTML = `${text.join(" ")}`;
        if (i >= 2) {
            text[i - 2] = `<section class="noticiToDo" id="noticia${i - 2}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[i - 2]}</h1><h2 class="titlesno">Categoria: ${categorias[i-2]}</h2><h5 class="titlesno">Data: ${dias[i - 2]}/${meses[i - 2]}/${anos[i - 2]}</h5><p class="titlesno">Descrição: ${descricoes[i - 2]}</p><h4 class="titlesno">Autor: ${autores[i - 2]}</h4><div class="flexin"><button class="butdel" onclick="deletar(${i - 2})">Deletar 🗑️</button><button class="butedit" onclick="editar(${i - 2})">Editar ✏️</button> <p class="rightjo" id="new${i - 2}"></p></div></div></section>`
        }
        i++
    }
    //verifica se o botão de editar foi apertado (caso verdadeiro)
    else if (edit > -1) {
        //puxando os intens escritos para uma array
        dias[edit] = inteiro[2]
        meses[edit] = inteiro[1]
        anos[edit] = inteiro[0]
        titulos[edit] = titulo
        datas[edit] = data
        descricoes[edit] = descricao
        autores[edit] = autor
        categorias[edit] = categoria

        //esvaziando as caixas de texto
        document.getElementById('titulo').value = ''
        document.getElementById('data').value = ''
        document.getElementById('descrição').value = ''
        document.getElementById('autor').value = ''
        document.getElementById('categoria').value = ''

        //array dos textos adicionados
        var sac = document.getElementById(`new${i - 3}`).innerHTML
        if (sac.toUpperCase() == 'NEW') {
            text[i - 3] = `<section class="noticiToDo" id="noticia${i - 3}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[i - 3]}</h1><h2 class="titlesno">Categoria: ${categorias[i - 3]}</h2><h5 class="titlesno">Data: ${dias[i - 3]}/${meses[i - 3]}/${anos[i - 3]}</h5><p class="titlesno">Descrição: ${descricoes[i - 3]}</p><h4 class="titlesno">Autor: ${autores[i - 3]}</h4><div class="flexin"><button class="butdel" onclick="deletar(${i - 3})">Deletar 🗑️</button><button class="butedit" onclick="editar(${i - 3})">Editar ✏️</button> <p class="rightjo" id="new${i - 3}"></p></div></div></section>`
        }

        if (sac.toUpperCase() == 'EDITED') {
            text[i - 3] = `<section class="noticiToDo" id="noticia${i - 3}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[i - 3]}</h1><h2 class="titlesno">Categoria: ${categorias[i - 3]}</h2><h5 class="titlesno">Data: ${dias[i - 3]}/${meses[i - 3]}/${anos[i - 3]}</h5><p class="titlesno">Descrição: ${descricoes[i - 3]}</p><h4 class="titlesno">Autor: ${autores[i - 3]}</h4><div class="flexin"><button class="butdel" onclick="deletar(${i - 3})">Deletar 🗑️</button><button class="butedit" onclick="editar(${i - 3})">Editar ✏️</button> <p class="rightjo" id="new${i - 3}">edited</p></div></div></section>`
        }

        text[edit] = `<section class="noticiToDo" id="noticia${edit}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[edit]}</h1><h2 class="titlesno">Categoria: ${categorias[edit]}</h2><h5 class="titlesno">Data: ${dias[edit]}/${meses[edit]}/${anos[edit]}</h5><p class="titlesno">Descrição: ${descricoes[edit]}</p><h4 class="titlesno">Autor: ${autores[edit]}</h4><div class="flexin"><button class="butdel" onclick="deletar(${edit})">Deletar 🗑️</button><button class="butedit" onclick="editar(${edit})">Editar ✏️</button><p class="rightjo" id="new${edit}">edited</p></div></div></section>`
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
var categorias = []





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
    categorias[x] = ''

    //fazer desaparecer o item desejado
    document.getElementById(`noticia${x}`).style.display = 'none'
}





//fuction para editar o item desejado 
function editar(y) {
    document.getElementById('titulo').value = titulos[y]
    document.getElementById('data').value = datas[y]
    document.getElementById('categoria').value = categorias[y]
    document.getElementById('descrição').value = descricoes[y]
    document.getElementById('autor').value = autores[y]
    edit = y

    text[y] = `<section class="noticiToDo" id="noticia${y}"><div class="separator"><h1 class="titlesno">Titulo: ${titulos[y]}</h1><h2 class="titlesno">Categoria: ${categorias[y]}</h2><h5 class="titlesno">Data: ${dias[y]}/${meses[y]}/${anos[y]}</h5><p class="titlesno">Descrição: ${descricoes[y]}</p><h4 class="titlesno">Autor: ${autores[y]}</h4><div class="flexin"><button class="butdel" onclick="deletar(${y})">Deletar 🗑️</button><button class="butedit" onclick="editar(${y})">Editar ✏️</button> <p class="rightjo" id="new${y}">edited</p></div></div></section>`
}










