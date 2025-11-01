fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("dadosBtc").innerHTML = `
      <span>Bitcoin (BRL)</span>
      <p>ultimo preco: R$ ${t.last}</p>
    `;
  });

function atualizarBTC() {
fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("dadosBtc2").innerHTML = `
      <span>Bitcoin (BRL)(BTC)</span>
       <div class="btc-linha">
         <p>Baixa do dia: <strong>R$ ${parseFloat(t.low).toLocaleString('pt-BR')}</strong></p>
         <p>Alta do dia: <strong>R$ ${parseFloat(t.high).toLocaleString('pt-BR')}</strong></p>
       </div>
    `;

    const randomPercent = Math.floor(Math.random() * 100);
    document.querySelector("#percent strong").textContent = `${randomPercent}%`;
    document.getElementById("progress-fill").style.width = `${randomPercent}%`;
  })
  .catch(err => console.error("Erro ao buscar BTC:", err));
}
setInterval(atualizarBTC, 10000);

atualizarBTC();

fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
    .then(response => response.json())
    .then(json => {
        const tc = json.ticker;
        document.getElementById("dadosCripto").innerHTML = `
          <p>Preço de compra: R$ ${tc.buy}</p>
        `;
    })


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
