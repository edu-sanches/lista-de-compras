let itemInput = document.getElementById('item')
let selectUl = document.querySelector('ul')

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
})

document.getElementById('create-item').addEventListener('click', () => {
    if (!itemInput.value == "") {
        // Cria o elemento HTML <li>
        const createLi = document.createElement('li')
        // Aplica a classe ao elemento HTML <li>
        createLi.classList.add('btn-wrapper')

        // Cria o elemento HTML input
        let createCheckbox = document.createElement('input')
        createCheckbox.setAttribute('name', 'select-item')
        createCheckbox.setAttribute('type', 'checkbox')

        // Cria o elemento HTML <p>
        let selectItemName = document.createElement('p')
        // Insere o valor do input no elemento <p>
        selectItemName.innerText = itemInput.value

        // Cria o elemento HTML <i>
        let createTrashIcon = document.createElement('img')
        // Busca o endereço da imagem
        createTrashIcon.src = "assets/icons/trash.svg"
        // Aplica as classes ao elemento HTML <i>
        createTrashIcon.classList.add('btn-delete')

        // Insere os elementos HTML <p> e <i> dentro do <li>
        createLi.append(createCheckbox, selectItemName, createTrashIcon)

        // Insere o elemento <li> como primeiro elemento da <ul> 
        selectUl.prepend(createLi)

        // Atualiza as variáveis de <li> e <i>
        let selectLi = document.querySelectorAll('li')
        let deleteBtn = document.querySelectorAll('.btn-delete')

        itemInput.value = ""

        // Chama a função de deletar os itens criados
        deleteItems(deleteBtn, selectLi)
    }
})

// Função para deletar os itens criados
function deleteItems(deleteBtn, selectLi) {
    deleteBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            selectLi[index].remove()
            closeToast()
        })
    })
}

// Função para fechar o toast
function closeToast() {
    let toastMessage = document.querySelector('.toast-message')

    document.getElementById('close-toast').onclick = () => {
        toastMessage.style.display = "none"
    }

    toastMessage.classList.remove('fade-out')
    toastMessage.style.display = 'flex'
    setTimeout(() => {
        toastMessage.classList.add('fade-out')
        toastMessage.transitionend = () => {
            toastMessage.style.display = 'none'
        }
    }, 500)
}

