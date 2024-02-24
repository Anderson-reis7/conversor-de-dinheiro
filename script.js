const selectCurrency = document.querySelector(".select-currency");
const buttonConverte = document.querySelector(".button-convert");

function currencyConvert() {
  const inputValue = document.querySelector(".input-value").value;
  const currencyDolar = document.querySelector(".result-dolar");
  const currencyReal = document.querySelector(".result-real");

  const exchangeRates = {
    dolar: 5,
    euro: 5.41,
    bitcoin: 257302.6,
    libra: 6.33,
  };

  if (selectCurrency.value == "dolar") {
    currencyDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / exchangeRates.dolar);
  }

  if (selectCurrency.value == "euro") {
    currencyDolar.innerHTML = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / exchangeRates.euro);
  }

  if (selectCurrency.value == "libra") {
    currencyDolar.innerHTML = new Intl.NumberFormat("GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / exchangeRates.libra);
  }

  if (selectCurrency.value == "bitcoin") {
    currencyDolar.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / exchangeRates.bitcoin);
  }

  currencyReal.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);
}

function currencyCountry() {
  const imgCoutry = document.querySelector(".image-coutry");
  const moneyCoutry = document.querySelector(".money-coutry");
  const resultCurrency = document.querySelector(".result-currency");

  if (selectCurrency.value == "dolar") {
    imgCoutry.src = "./assets/usa.png";
    moneyCoutry.innerHTML = "Dolar Americano";
  }

  if (selectCurrency.value == "euro") {
    imgCoutry.src = "./assets/euro.png";
    moneyCoutry.innerHTML = "Euro";
  }

  if (selectCurrency.value == "libra") {
    imgCoutry.src = "./assets/libra.png";
    moneyCoutry.innerHTML = "Libra";
  }

  if (selectCurrency.value == "bitcoin") {
    imgCoutry.src = "./assets/bitcoin.png";
    moneyCoutry.innerHTML = "Bitcoin";
  }

  currencyConvert();
}

selectCurrency.addEventListener("change", currencyCountry);
buttonConverte.addEventListener("click", currencyConvert);
