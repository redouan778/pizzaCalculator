
var pizzaName = document.getElementById('pizzaName');
var pizzaImage = document.getElementById('pizzaImage');
var pizzaPrice = document.getElementById('pizzaPrice');
var totalPrice = 0;
var totalPriceWithSlicing = 0;
var SelectedPizza = null;
var SelectedTopping = null;
var SelectedSlicing = null;
var slicingAlreadySelected = false;
var SelectedSize = null;
var sizeinUse = false;
var toppingIsSelected = false;
var alert = document.getElementById('alert');
var pizzaOrder = document.getElementById('pizzaOrder')
var toppingOrder = document.getElementById('toppingOrder')
var sizeOrder = document.getElementById('sizeOrder')
var slicingOrder = document.getElementById('slicingOrder')
var currency = "€";

var pizzas = [
  {
    Name:'Margharita',
    Price: 8.50,
    Image: "img/marg.png",
    Selected: false,
  },
  {
   Name:"Kebab",
   Price: 8.50,
   Image: "img/kebab.png",
   Selected: false,

 },
 {
   Name:"Funghi",
   Price: 11.50,
   Image: "img/funghi.png",
   Selected: false,

 },
 {
   Name:"Pollo",
   Price: 10,
   Image: "img/pollo.png",
   Selected: false,
 }
];

var toppings = [
  {
    Name:'Extra cheese',
    Price: 1.5,
    Selected: false,

  },
  {
   Name:"Extra chicken",
   Price: 2,
   Selected: false,

 },
 {
   Name:"BBQ sauce",
   Price: 0.75,
   Selected: false,

 },
 {
   Name:"Olives",
   Price: 0.5,
   Selected: false,

 }
];

 var size = [
   { Name:'Normal', Factor: 1, Selected: false },
   { Name:"Medium", Factor: 1.5, Selected: false},
   { Name:"Large", Factor: 2, Selected: false },
   { Name:"King", Factor: 3, Selected: false }
];

var slicing = [
  {
    Name:'Unsliced',
    Price: 0,
    Selected: false,

  },
  {
   Name:"Two Slice",
   Price: 0.5,
   Selected: false,

 },
 {
   Name:"Four Slice",
   Price: 0.75,
   Selected: false,

 },
 {
   Name:"Six Slice",
   Price: 1,
   Selected: false,

 }
];

var additional = [
  {
    Name:'Delivery',
    Price: 1.50,
    Selected: false,
  },
  {
   Name:"Debit card",
   Price: 0.5,
   Selected: false,

 },
]


//display alert function
function displayAlert() {
  alert.style.display = "block";
setTimeout(function(){
alert.style.display = "none";
}, 1500)
}

//Pizzalist ophalen
var pizzalist = document.getElementById('pizzaNameList');

for (var i = 0; i < pizzas.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(pizzas[i].Name));

        // Add it to the list:
        pizzalist.appendChild(item);

        //add id to the pizza'switch
        item.setAttribute("id" , "p" + i)
    }


    //get all pizza's by // ID
    var mar = document.getElementById('p0');
    var keb = document.getElementById('p1');
    var fun = document.getElementById('p2');
    var pol = document.getElementById('p3');

//Topping ophalen
var toppinglist = document.getElementById('toppingNameList');

for (var i = 0; i < toppings.length; i++) {
  // Create the list item:
  var item = document.createElement('li');

  // Set its contents:
  item.appendChild(document.createTextNode(toppings[i].Name));

  //add id to the topping
  item.setAttribute("id" , "t" + i);
  // Add it to the list:
  toppinglist.appendChild(item);

}


//get all toppings by id
var tche = document.getElementById('t0');
var tchi = document.getElementById('t1');
var tbbq = document.getElementById('t2');
var toli = document.getElementById('t3');


//size ophalen
var sizelist = document.getElementById('sizeNameList');

    for (var i = 0; i < size.length; i++) {
    // Create the list item:
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(size[i].Name));

    // Add it to the list:
    sizelist.appendChild(item);

    //add id to the topping
    item.setAttribute("id" , "s" + i)
    }

    //get all toppings by id
    var snor = document.getElementById('s0');
    var smed = document.getElementById('s1');
    var slar = document.getElementById('s2');
    var skin = document.getElementById('s3');

//slicing ophalen
  var slicinglist = document.getElementById('slicingNameList');

    for (var i = 0; i < slicing.length; i++) {
              // Create the list item:
    var item = document.createElement('li');

        // Set its contents:
              item.appendChild(document.createTextNode(slicing[i].Name));

    // Add it to the list:
      slicinglist.appendChild(item);

    //add id to the topping
    item.setAttribute("id" , "sl" + i)
          }
    //get all toppings by id
    var slun = document.getElementById('sl0');
    var sltwo = document.getElementById('sl1');
    var slfou = document.getElementById('sl2');
    var slsix = document.getElementById('sl3');


//additionallist
    var additionals = document.getElementById('additionalList');

    for (var i = 0; i < additional.length; i++) {
            // Create the list item:
            var item = document.createElement('li');

            // Set its contents:
            item.appendChild(document.createTextNode(additional[i].Name));

            // Add it to the list:
            additionals.appendChild(item);

            //add id to the pizza'switch
            item.setAttribute("id" , "a" + i)
        }

        //get all pizza's by // ID
        var adel = document.getElementById('a0');
        var aban = document.getElementById('a1');


function selectPizza(Selected) {
  // loop over alles in de Topping array
  // kijk of de naam overeenkomst met 'Selected'
  // zo ja, zet dan daar "Selected" op true in de array
  var i;
  for (i = 0; i < pizzas.length; i++) {
    if(pizzas[i].Name == Selected) {
      pizzas[i].Selected = true;
    } else {
      pizzas[i].Selected = false;
    } ;
  }
  displayAlert();
  calculateTotalPrice();
}

        mar.onclick = function () {selectPizza('Margharita');}
        keb.onclick = function () {selectPizza('Kebab');}
        fun.onclick = function () {selectPizza('Funghi');}
        pol.onclick = function () {selectPizza('Pollo');}

function selectTopping(Selected) {
// loop over alles in de Topping array
// kijk of de naam overeenkomst met 'Selected'
// zo ja, zet dan daar "Selected" op true in de array
var i;
for (i = 0; i < toppings.length; i++) {
  if(toppings[i].Name == Selected) {
    toppings[i].Selected = true;
  } ;
}
displayAlert();
calculateTotalPrice();
}

      tche.onclick = function () {selectTopping('Extra cheese');}
      tchi.onclick = function () {selectTopping('Extra chicken');}
      tbbq.onclick = function () {selectTopping('BBQ sauce');}
      toli.onclick = function () {selectTopping('Olives');}




//SIZE PIZZA FUNCTIONS //
function selectSize(Selected) {
  // loop over alles in de size array
  // kijk of de naam overeenkomst met 'Selected'
  // zo ja, zet dan daar "Selected" op true in de array
  var i;
  console.log("SelectedSize:" + Selected);
  for (i = 0; i < size.length; i++) {
    if(size[i].Name == Selected) {
      size[i].Selected = true;
    } else {
      size[i].Selected = false;
    };
  }
  displayAlert();
  calculateTotalPrice();
}

        snor.onclick = function () {selectSize('Normal');}
        smed.onclick = function () {selectSize('Medium');}
        slar.onclick = function () {selectSize('Large');}
        skin.onclick = function () {selectSize('King');}


function selectSlicing(Selected) {
// loop over alles in de slicing array
// kijk of de naam overeenkomst met 'Selected'
// zo ja, zet dan daar "Selected" op true in de array
var i;
for (i = 0; i < slicing.length; i++) {
  if(slicing[i].Name == Selected) {
    slicing[i].Selected = true;
  } else {
    slicing[i].Selected = false;
  };
}
displayAlert();
calculateTotalPrice();
}

        slun.onclick = function () {selectSlicing('Unsliced');}
        sltwo.onclick = function () {selectSlicing('Two Slice');}
        slfou.onclick = function () {selectSlicing('Four Slice');}
        slsix.onclick = function () {selectSlicing('Six Slice');}

function selectAdditional(Selected) {
// loop over alles in de additional array
// kijk of de naam overeenkomst met 'Selected'
// zo ja, zet dan daar "Selected" op true in de array
var i;
for (i = 0; i < additional.length; i++) {
if(additional[i].Name == Selected) {
  additional[i].Selected = true;
} ;
}
displayAlert();
calculateTotalPrice();
}

              adel.onclick = function () {selectAdditional('Delivery');}
              aban.onclick = function () {selectAdditional('Debit card');}


function calculateTotalPrice() {
  totalPrice = 0;

      for (i = 0; i < pizzas.length; i++) {
        if(pizzas[i].Selected == true) {
          totalPrice = totalPrice + pizzas[i].Price;
          pizzaImage.src = pizzas[i].Image;
          pizzaName.innerHTML = pizzas[i].Name;
          pizzaOrders.innerHTML = pizzas[i].Name + " " + currency + pizzas[i].Price;
        };
      }

      for (i = 0; i < slicing.length; i++) {
        if(slicing[i].Selected == true) {
          totalPrice = totalPrice + slicing[i].Price;
          slicingOrders.innerHTML = slicing[i].Name + " " + currency + slicing[i].Price;
        };
      }

      for (i = 0; i < size.length; i++) {
        if(size[i].Selected == true) {
          totalPrice = totalPrice * size[i].Factor;
          sizeOrders.innerHTML = size[i].Name + " x " + size[i].Factor;

        };
      }

      for (i = 0; i < toppings.length; i++) {
        if(toppings[i].Selected == true) {
          totalPrice = totalPrice + toppings[i].Price;
          toppingOrders.innerHTML = toppings[i].Name + " " + currency + toppings[i].Price;
        };
      }

      for (i = 0; i < additional.length; i++) {
        if(additional[i].Selected == true) {
          totalPrice = totalPrice + additional[i].Price;
          additionalOrders.innerHTML = additional[i].Name + " " + currency + additional[i].Price;
        };
      }

      // repeat this for topping, pizza, and size
      pizzaPrice.innerHTML = currency + totalPrice;

    }
