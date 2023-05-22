var edit = -1

function adicionarnot() {
    var titulo = document.getElementById('titulo').value
    var data = document.getElementById('data').value
    var descricao = document.getElementById('descrição').value
    var autor = document.getElementById('autor').value
    var inteiro = data.split('-')

    if (titulo == '' || data == '' || descricao == '' || autor == '') {
        alert('insira valor valido')
    } else if (edit < 0) {
        dias.push(inteiro[2])
        meses.push(inteiro[1])
        anos.push(inteiro[0])
        titulos.push(titulo)
        datas.push(data)
        descricoes.push(descricao)
        autores.push(autor)

        titulo = ''
        data = ''
        descricao = ''
        autor = ''

        document.getElementById('titulo').value = ''
        document.getElementById('data').value = ''
        document.getElementById('descrição').value = ''
        document.getElementById('autor').value = ''
        text[i] = `<section id="noticia${i}"><h1>Titulo: ${titulos[i]}</h1><h5>Data: ${dias[i]}/${meses[i]}/${anos[i]}</h5><p>Descrição: ${descricoes[i]}</p><h4>Autor: ${autores[i]}</h4><button onclick="deletar(${i})">deletar</button><button onclick="editar(${i})">editar</button><hr></section>`

        document.getElementById(`todos`).innerHTML = `${text.join(' ')}`
        i++
    }

    if (edit > -1) {
        dias[edit] = inteiro[2]
        meses[edit] = inteiro[1]
        anos[edit] = inteiro[0]
        titulos[edit] = titulo
        datas[edit] = data
        descricoes[edit] = descricao
        autores[edit] = autor
        document.getElementById('titulo').value = ''
        document.getElementById('data').value = ''
        document.getElementById('descrição').value = ''
        document.getElementById('autor').value = ''
        text[edit] = `<section id="noticia${edit}"><h1>Titulo: ${titulos[edit]} - editado</h1><h5>Data: ${dias[edit]}/${meses[edit]}/${anos[edit]}</h5><p>Descrição: ${descricoes[edit]}</p><h4>Autor: ${autores[edit]}</h4><button onclick="deletar(${edit})">deletar</button><button onclick="editar(${edit})">editar</button><hr></section>`
        document.getElementById(`todos`).innerHTML = `${text.join(' ')}`
        edit = -1
    }
}

var titulos = []
var datas = []
var descricoes = []
var autores = []
var i = 0
var text = []
var dias = []
var meses = []
var anos = []

function deletar(x) {
    dias[x] = ''
    meses[x] = ''
    anos[x] = ''
    titulos[x] = ''
    datas[x] = ''
    descricoes[x] = ''
    autores[x] = ''
    text[x] = ''
    document.getElementById(`noticia${x}`).style.display = 'none'
}

function editar(y) {
    document.getElementById('titulo').value = titulos[y]
    document.getElementById('data').value = datas[y]

    document.getElementById('descrição').value = descricoes[y]
    document.getElementById('autor').value = autores[y]
    edit = y

    text[y] = `<section id="noticia${y}"><h1>Titulo: ${titulos[y]}</h1><h5>Data: ${datas[y]}</h5><p>Descrição: ${descricoes[y]}</p><h4>Autor: ${autores[y]}</h4><button onclick="deletar(${y})">deletar</button><button onclick="editar(${y})">editar</button><hr></section>`
}