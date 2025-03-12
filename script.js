// Cotações de moedas do dia.
const USD = 5.87
const EUR = 6.12
const GBP = 7.30

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o Input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertyCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertyCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertyCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter moeda.
function convertyCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
    // Calcula o total.
    let total = amount * price

    // Verifica se o resultado não é um número.
    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    // Formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total.
    result.textContent = `${total} Reais`

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
  
  } catch (error) {
    // Renive a classe do footer removendo ele da tela.
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possivel converter.")
  }
}

// Formata a moeda em real brasileiro.
function formatCurrencyBRL(value) {

  // Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00).
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}