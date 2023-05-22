
    // Array para armazenar as informações dos itens
    var todoItems = [];

    // Função para adicionar um novo item à lista
    function addItem() {
      var titleInput = document.getElementById('titleInput');
      var dateInput = document.getElementById('dateInput');
      var descriptionInput = document.getElementById('descriptionInput');
      var authorInput = document.getElementById('authorInput');

      // Obter os valores dos campos de entrada
      var title = titleInput.value;
      var date = dateInput.value;
      var description = descriptionInput.value;
      var author = authorInput.value;

      if (title && date && description && author) {
        // Adicionar as informações em um objeto
        var newItem = {
          title: title,
          date: date,
          description: description,
          author: author
        };

        // Adicionar o objeto ao array
        todoItems.push(newItem);

        // Limpar os campos de entrada
        titleInput.value = '';
        dateInput.value = '';
        descriptionInput.value = '';
        authorInput.value = '';

        // Atualizar a exibição da lista
        updateList();
      }
    }

    // Função para deletar um item da lista
    function deleteItem(index) {
      // Remover o item do array
      todoItems.splice(index, 1);

      // Atualizar a exibição da lista
      updateList();
    }

    // Função para editar um item da lista
    function editItem(index) {
      var item = todoItems[index];

      // Preencher os campos de entrada com os valores do item selecionado
      document.getElementById('titleInput').value = item.title;
      document.getElementById('dateInput').value = item.date;
      document.getElementById('descriptionInput').value = item.description;
      document.getElementById('authorInput').value = item.author;

      // Remover o item da lista
      deleteItem(index);
    }

    // Função para atualizar a exibição da lista
    function updateList() {
      var todoList = document.getElementById('todoList');

      // Limpar a lista existente
      todoList.innerHTML = '';

      // Criar e adicionar o banner para cada item no array
      for (var i = 0; i < todoItems.length; i++) {
        var item = todoItems[i];

        var listItem = document.createElement('div');
        listItem.classList.add('item');
        listItem.innerHTML = '<h3>' + item.title + '</h3>' +
                             '<p><strong>Data:</strong> ' + item.date + '</p>' +
                             '<p><strong>Descrição:</strong> ' + item.description + '</p>' +
                             '<p><strong>Autor:</strong> ' + item.author + '</p>' +
                             '<button class="editButton" onclick="editItem(' + i + ')">Editar 📝</button>' +
                             '<button class="deleteButton" onclick="deleteItem(' + i + ')">Deletar 🗑</button>';

        // Adicionar o banner à lista
        todoList.appendChild(listItem);
      }
    }

    // Chamar a função updateList() para exibir os itens iniciais da lista (se houver)