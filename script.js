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