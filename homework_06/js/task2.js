var euro = parseFloat(prompt("Enter amount of EURO:","")); 
var usd = parseFloat(prompt("Enter amount of USD:",""));

var rateEuro = 33.2324;
var rateUsd = 27.1240;

var euroUah = euro * rateEuro;
var usdUah = usd * rateUsd;
var euroUsd = euro / usd;

if (euro <= 0 || usd <= 0 || isNaN(euro) || isNaN(usd)){
    console.log("Incorrect data");
}
else{
  console.log(euro +" euros are equal " + euroUah.toFixed(2)+ " UAH, " + usd + " dollars are equal "+ usdUah.toFixed(2) + " UAH, one euro is equal " +euroUsd.toFixed(2)+ " dollars.");
}