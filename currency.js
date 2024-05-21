var myHeaders = new Headers();
myHeaders.append("apikey", "yI02ezw20753kccN347BWPeZ3QtStwx7");

function Calc(){

const symbols = document.getElementById('symbols').value
const base = document.getElementById('base').value
const currency = document.getElementById('currency')

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`, requestOptions)
  .then(response => response.text())
  .then(result => JSON.parse(result))
  .then((result) => {
    console.log(result.rates)
        currency.textContent = result.rates

  })

}
  