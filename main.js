'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "ana",
    email: "ana@gmail.com",
    celular: "1198765321",
    cidade: "São paulo - SP"
}

// CRUD = create read update delete

const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    db_client.push (client);
    localStorage.setItem("db_client", JSON.stringify(db_client));
}

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)