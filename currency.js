var myHeaders = new Headers();
myHeaders.append("apikey", "JGEh2dIv3YgEMIoosnkWf1tdoOioZOfR");

// JGEh2dIv3YgEMIoosnkWf1tdoOioZOfR
// yI02ezw20753kccN347BWPeZ3QtStwx7

function Calc(){

const amount = document.getElementById('amount').value
const symbols = document.getElementById('symbols').value
const base = document.getElementById('base').value
const currency = document.getElementById('currency')

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
// exchangerates_data/convert?to

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${symbols}&from=${base}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => JSON.parse(result))
  .then((result) => {
    console.log(result.result)
        currency.textContent = result.result

  })

}
  