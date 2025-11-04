// CLIENTE: Envio do chamado
const form = document.getElementById('ticketForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const descricao = document.getElementById('descricao').value;

    const ticket = { nome, email, descricao, data: new Date().toLocaleString() };

    // Salva no localStorage
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push(ticket);
    localStorage.setItem('tickets', JSON.stringify(tickets));

    alert('Chamado enviado com sucesso!');
    form.reset();
  });
}

// ADMIN: Exibição dos chamados
const ticketList = document.getElementById('ticketList');
if (ticketList) {
  const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  
  if (tickets.length === 0) {
    ticketList.innerHTML = "<p>Nenhum chamado enviado ainda.</p>";
  } else {
    tickets.forEach((t) => {
      const div = document.createElement('div');
      div.classList.add('ticket');
      div.innerHTML = `
        <strong>Nome:</strong> ${t.nome}<br>
        <strong>Email:</strong> ${t.email}<br>
        <strong>Data:</strong> ${t.data}<br>
        <strong>Descrição:</strong> ${t.descricao}
      `;
      ticketList.appendChild(div);
    });
  }
}
