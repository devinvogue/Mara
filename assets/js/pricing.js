let cleaningCard = document.getElementById('cleaning');
let cleaningCardClicked = false;

let plumbingCard = document.getElementById('plumbing');
let plumbingCardClicked = false;

let electricalsCard = document.getElementById('electricals');
let electricalsCardClicked = false;

let maidCard = document.getElementById('maid');
let maidCardClicked = false;

let paintingCard = document.getElementById('painting');
let paintingCardClicked = false;

let handymanCard = document.getElementById('handyman');
let handymanCardClicked = false;

let totalPricing = 0;
let priceContainer = document.getElementById('priceContainer');

console.log(electricalsCard)



// Function to set price on page
const setPrice = function(){
  let priceSummary = `<h1>Total price is GHs${totalPricing}</h1>`
  priceContainer.innerHTML = priceSummary;
}

// Cleaning card
cleaningCard.addEventListener('click', function(){
  let price = 35;
  if(cleaningCardClicked){
    cleaningCard.style.boxShadow = 'none';
    cleaningCardClicked = false;
    totalPricing -= price;
    setPrice();
  }else{
    cleaningCard.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    cleaningCardClicked = true;
    totalPricing += price;
    setPrice();
  }
})

// Plumbing Card
plumbingCard.addEventListener('click', function(){
  let price = 55;
  if(plumbingCardClicked){
    plumbingCard.style.boxShadow = 'none';
    plumbingCardClicked = false;
    totalPricing -= price;
    setPrice();
  }else{
    plumbingCard.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    plumbingCardClicked = true;
    totalPricing += price;
    setPrice();
  }
})


// Electricals Card
electricalsCard.addEventListener('click', function(){
  let price = 75;
  if(electricalsCardClicked){
    electricalsCard.style.boxShadow = 'none';
    electricalsCardClicked = false;
    totalPricing -= price;
    setPrice();
  }else{
    electricalsCard.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    electricalsCardClicked = true;
    totalPricing += price;
    setPrice()
  }
})


// Maid Card
maidCard.addEventListener('click', function(){
  let price = 150;
  if(maidCardClicked){
    maidCard.style.boxShadow = 'none';
    maidCardClicked = false;
    totalPricing -= price;
    setPrice();
  }else{
    maidCard.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    maidCardClicked = true;
    totalPricing += price;
    setPrice();
  }
})


// Painting Card
paintingCard.addEventListener('click', function(){
  let price = 150;
  if(paintingCardClicked){
    paintingCard.style.boxShadow = 'none';
    paintingCardClicked = false;
    totalPricing -= price;
    setPrice();
  }else{
    paintingCard.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    paintingCardClicked = true;
    totalPricing += price;
    setPrice();
  }
})

// Handyman Card
handymanCard.addEventListener('click', function(){
  let price = 35;
  if(handymanCardClicked){
    handymanCard.style.boxShadow = 'none';
    handymanCardClicked = false;
    totalPricing -= price;
    setPrice();
  }else{
    handymanCard.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    handymanCardClicked = true;
    totalPricing += price;
    setPrice();
  }
})
