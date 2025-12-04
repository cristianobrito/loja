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
setInterval(atualizarBTC, 10000);  // 10 segundos 

atualizarBTC();

//============================================================
function atualizarGrafico(percent) {
  const circle = document.getElementById("circle-progress");
  const text = document.getElementById("percent-text");

  const total = 283; // perímetro do círculo
  const offset = total - (percent / 100) * total;

  circle.style.strokeDashoffset = offset;
  text.textContent = percent + "%";
}

function atualizarBTC2() {
fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;

    // Atualiza alta e baixa no card
    // document.getElementById("btc-low").textContent =
    //   "R$ " + parseFloat(t.low).toLocaleString("pt-BR");

    // document.getElementById("btc-high").textContent =
    //   "R$ " + parseFloat(t.high).toLocaleString("pt-BR");

    const randomPercent = Math.floor(Math.random() * 100);
    const percent = ((t.high - t.low) / t.low) * 100;
    atualizarGrafico(randomPercent);  // 🔥 ATUALIZA CÍRCULO AQUI
  })
  .catch(err => console.error("Erro ao buscar BTC:", err));
}
setInterval(atualizarBTC2, 5000); // atualiza a cada 5s

atualizarBTC2();

//=============================================================

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


//=========== preço de venda ================
function p_venda(){
fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("p_venda").innerHTML = `
      <span><strong>Preço de venda:</strong></span>
      <span>Price sell</span>
      <p>R$${t.sell}</p>
    `;
  });
}
setInterval(p_venda, 5000);
//========== fim preço de venda =============

//=========== preço de compra ================
function p_compra(){
fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("p_compra").innerHTML = `
      <span> <strong>Preço de compra:</strong></span><br>
      <span>Price buy</span>
      <p>R$${t.buy}</p>
    `;
  });
}
setInterval(p_compra, 5000);
//========== fim preço de compra =============


//=========== ultimo preço ================
fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("p_ultimo").innerHTML = `
      <span> <strong>Ultimo preço:</strong></span><br>
      <span>Price last</span>
      <p>R$${t.last}</p>
    `;
  });

//========== ultimo preço =============

//========= cotaçao em tempo real =====
function atualizarPercent(percent) {
  const text = document.getElementById("percent2");
  const offset = (percent / 100) * total;
  text.textContent = percent + "%";
}

function atualizarTempoReal() {
fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("p_cotacoes").innerHTML = `
      <span>Bitcoin (BRL)(BTC)</span>
       <div class="btc-linha">
         <p>Baixa do dia: <strong>R$ ${parseFloat(t.low).toLocaleString('pt-BR')}</strong></p>
         <i class="fa fa-university" aria-hidden="true"></i>
         <p>Alta do dia: <strong>R$ ${parseFloat(t.high).toLocaleString('pt-BR')}</strong></p>
       </div>
    `;

    const randomPercent = Math.floor(Math.random() * 100);
    atualizarTempoReal(randomPercent);
    document.querySelector("#p_ultimo").textContent = `${randomPercent}%`;
    document.getElementById("#p_ultimo").style.width = `${randomPercent}%`;
  })
  .catch(err => console.error("Erro ao buscar BTC:", err));
}
setInterval(atualizarTempoReal, 10000);  // 10 segundos 

atualizarTempoReal();

//======== fim cotaçao em tempo real ====

//=========== atualiza alta ================
function atualizar_alta(){
fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("btc-high").innerHTML = `
      <span> <strong>Alta:</strong></span><br>
      <p>R$${t.buy}</p>
    `;
  });
}
setInterval(atualizar_alta, 5000);
//========== fim atualiza alta =============

//=========== atualiza baixa ================
function atualizar_baixa(){
fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
  .then(response => response.json())
  .then(json => {
    const t = json.ticker;
    document.getElementById("btc-low").innerHTML = `
      <span> <strong>Baixa:</strong></span><br>
      <p>R$${t.buy}</p>
    `;
  });
}
setInterval(atualizar_baixa, 5000);
//========== fim atualiza baixa =============