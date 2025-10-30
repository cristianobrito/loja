fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("dadosBtc").innerHTML = `
      <span>Bitcoin (BRL)</span>
      <p>ultimo preco: R$ ${t.last}</p>
    `;
  });

fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
    .then(response => response.json())
    .then(json => {
        const tc = json.ticker;
        document.getElementById("dadosCripto").innerHTML = `
          <p>Preço de compra: R$ ${tc.buy}</p>
        `;
    })

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//     .then(response => response.json())
//     .then(posts => {
//       const tbody = document.getElementById("tabela-dados");
//       tbody.innerHTML = "";

//     posts.forEach((post, index) => {
//       const tr = document.createElement('tr');

//       const tdAtivo = document.createElement('td');   
//       tdAtivo.textContent = post.title.substring(0, 20);

//       const tdPreco = document.createElement('td');
//       tdPreco.textContent = `R$ ${(Math.random() * 100000).toFixed(2)}`; // preço fake pra exemplo

//       const tdVariacao = document.createElement('td');
//       tdVariacao.textContent = `${(Math.random() * 5 - 2.5).toFixed(2)}%`; // variação fake entre -2.5% e +2.5%

//       // adiciona os tds ao tr
//       tr.appendChild(tdAtivo);
//       tr.appendChild(tdPreco);
//       tr.appendChild(tdVariacao);

//       // adiciona o tr ao tbody
//      tbody.appendChild(tr);

//     });
// })

  // .catch(error => console.error("Erro:", error));

fetch('http://localhost:3000/api/products')
  .then(r => r.json())
  .then(data => console.log(data));

fetch('http://localhost:3000/api/products')
  .then(r => r.json())
  .then(products => {
    const tbody = document.getElementById("tabela-dados");
    tbody.innerHTML = "";

    products.forEach(product => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${product.name}</td>
        <td>R$ ${Number(product.price).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
        <td>${Number(product.variation).toFixed(2)}%</td>
      `;
      tbody.appendChild(tr);
    });
  })

   .catch(err => console.error("Erro:", err));