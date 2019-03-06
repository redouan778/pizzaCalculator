
var pizzaName = document.getElementById('pizzaName');
var pizzaImage = document.getElementById('pizzaImage');
var pizzaPrice = document.getElementById('pizzaPrice');
var slicingAlreadySelected = false;
var SelectedSize = null;
var sizeinUse = false;
var toppingIsSelected = false;
var alert = document.getElementById('alert');
var pizzaOrder = document.getElementById('pizzaOrder')
var toppingOrder = document.getElementById('toppingOrder')
var sizeOrder = document.getElementById('sizeOrder')
var slicingOrder = document.getElementById('slicingOrder')
var currency = "$";

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


function displayAlert() {
  alert.style.display = "block";
setTimeout(function(){
alert.style.display = "none";
}, 1500)
}

var pizzalist = document.getElementById('pizzaNameList');

for (var i = 0; i < pizzas.length; i++) {
        var item = document.createElement('li');

        item.appendChild(document.createTextNode(pizzas[i].Name));

        pizzalist.appendChild(item);
        item.setAttribute("id" , "p" + i)
    }


    var pmar = document.getElementById('p0');
    var pkeb = document.getElementById('p1');
    var pfun = document.getElementById('p2');
    var ppol = document.getElementById('p3');

var toppinglist = document.getElementById('toppingNameList');

for (var i = 0; i < toppings.length; i++) {
  var item = document.createElement('li');

  item.appendChild(document.createTextNode(toppings[i].Name));

  item.setAttribute("id" , "t" + i);
  toppinglist.appendChild(item);

}
