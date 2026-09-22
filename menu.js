1/* =========================================================
   পাতপেড়ে · MENU FILE. This is the only file you need to edit.

   Change a price ........ edit the number after price:
   Add a dish ............ copy one full dish line, paste it below the
                           last dish, then change id (must be unique),
                           name, price and icon
   Remove a dish ......... delete its whole line
   Sold out today ........ add soldOut:true to the dish line
                           (delete it again to bring the dish back)
   Limit for one dish .... add max:N to the dish line
   Keep a comma at the end of every dish line except the last one.
   ========================================================= */

/* ---- Number, charges and limits ---- */
const FIRST_ORDER_OFFER = true;
const FEATURED = {
  show: true,
  dishes: [
    { id:"fbf", name:"Fish Batter Fry", price:89, alone:true, minAlone:4, max:10, soldOut:true },
  ]
};
const ORDERS_OPEN = true;
const CLOSED_MESSAGE = "We are closed today. Please check back soon.";
const UPI_ID = "parna.1707-1@oksbi";
const UPI_NAME = "Patpere";
const PHONE = "917980281550";
const PACKAGING_PER_ITEM = 10;
const FIRST_ORDER_ITEM = "spveg";
const FIRST_ORDER_PRICE = 99;
const MAX_PER_ITEM = 2;   // most of one dish in a single order. Give a dish its own limit with max:N
// To mark a dish sold out for the day, add soldOut:true to its line, e.g. { id:"fish", ..., soldOut:true }
const ITEMS = [
  { id:"veg",     group:"thali", name:"Economy Veg Thali", price:110, icon:"🌿",
    incl:["Bhaat","Dal","Bhaja","Sabji / Shaak / Chacchori","Sabji 2"] },
  { id:"spveg",   group:"thali", name:"Special Veg Thali",  price:130, icon:"🌟",
    incl:["Bhaat","Dal","Sabji Bharta / Shukto / Shaak / Chacchori","Bhaja","Sabji","Chatni / Salad"] },
  { id:"egg",     group:"thali", name:"Dim (Egg) Thali",    price:120, icon:"🥚",
    incl:["Rice","Dal","Bhaja","Sabji","Egg (1 pc)"] },
  { id:"fish",    group:"thali", name:"Maach (Fish) Thali", price:1, icon:"🐟",
    incl:["Bhaat","Dal","Bhaja","Sabji","Rui Maach (70 gm)"] },
  { id:"chicken", group:"thali", name:"Chicken Thali",      price:150, icon:"🍗",
    incl:["Bhaat","Dal","Bhaja","Sabji","Chicken (100 gm)"] },
  { id:"eggc",    group:"curry", name:"Egg Curry (2 pcs)",       price:30, icon:"🥚", },
  { id:"eggoc",    group:"curry", name:"Double Egg Omlette Curry",       price:35, icon:"🥚", },
  { id:"fishc",   group:"curry", name:"Rohu Fish Curry (70 gm)", price:40, icon:"🐟" },
  { id:"chickc",  group:"curry", name:"Chicken Curry (100 gm)",  price:60, icon:"🍗" },
];
