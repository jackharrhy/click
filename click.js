var cashMoney = 0;
var clicks = 0;

var thing = {
  hobo: {
    cps: 1,
    counter: 0,
    price: 30
  },
  duck: {
    cps: 3,
    counter: 0,
    price: 110
  }
};

function attemptToPurchase(object) {
  if(object === 'hobo' && cashMoney >= thing.hobo.price) {
    thing.hobo.counter++;
    
    cashMoney -= Math.ceil(thing.hobo.price);
    thing.hobo.price += Math.ceil(thing.hobo.price/6);
    
    info.update();
  } else if(object === 'duck' && cashMoney >= thing.duck.price) {
    thing.duck.counter++;
    
    cashMoney -= Math.ceil(thing.duck.price);
    thing.duck.price += Math.ceil(thing.duck.price/6);
    
    info.update();
  }
}

var info = {
  update: function() {
    info.cashMoney.innerHTML = String(cashMoney);
    info.clicks.innerHTML = String(clicks);
    
    info.hoboCounter.innerHTML = String(thing.hobo.counter);
    info.hoboPrice.innerHTML = String(thing.hobo.price);
    
    info.duckCounter.innerHTML = String(thing.duck.counter);
    info.duckPrice.innerHTML = String(thing.duck.price);
  },
  cashMoney: document.getElementById('cashMoney'),
  clicks: document.getElementById('clicks'),
  
  hoboCounter: document.getElementById('hoboCounter'),
  hoboPrice: document.getElementById('hoboPrice'),
  
  duckCounter: document.getElementById('duckCounter'),
  duckPrice: document.getElementById('duckPrice')
};
info.update();

function loopEverySecond() {
  info.update();
  
  cashMoney +=
    thing.hobo.cps * thing.hobo.counter +
    thing.duck.cps * thing.duck.counter;
  
  setTimeout(loopEverySecond, 1000);
}

loopEverySecond();