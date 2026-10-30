const coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
  { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
  { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// inserting the elements into the main page respecting default

for (let i = 0; i < coffeeProducts.length; i++) {
  let val_id = coffeeProducts[i].id
  let val_name = coffeeProducts[i].name
  let val_category = coffeeProducts[i].category
  let val_price = coffeeProducts[i].price
  let val_quantity = 1
  let img_src = coffeeProducts[i].image
  let img_alt = img_src.replace(".jpg", "");

  let selection_total = val_price * val_quantity + " HD"
if (val_id=="c2"||val_id=="c3"||val_id=="c8") {
     let template = `<div class="choice_card " id="${val_id}">
                    <div class="c_c_img"><img src="./resources/${img_src}" alt="${img_alt}"></div>
                    <div class="first_div">
                        <p>name: </p>     <span>${val_name}</span>
                        <p>category: </p> <span>${val_category}</span>
                        <p>prix: </p>     <span class="val_price">${val_price} HD</span>
                        <p>total prix:</p><span class="selection_total">${selection_total}</span>
                    </div>
                    <div class="second_div">
                        <img class="cross" src="./resources/cross.png" alt="cross">
                        <button class="plus_btn">+</button>
                        <span class="quantity">${val_quantity}</span>
                        <button class="minus_btn">-</button>
                    </div>
                </div>`
    let thediv = document.querySelector('.card_choosed')
    thediv.innerHTML += template
  }
else
 { let template = `<div class="choice_card hiding" id="${val_id}">
                    <div class="c_c_img"><img src="./resources/${img_src}" alt="${img_alt}"></div>
                    <div class="first_div">
                        <p>name: </p>     <span>${val_name}</span>
                        <p>category: </p> <span>${val_category}</span>
                        <p>prix: </p>     <span class="val_price">${val_price} HD</span>
                        <p>total prix:</p><span class="selection_total">${selection_total}</span>
                    </div>
                    <div class="second_div">
                        <img class="cross" src="./resources/cross.png" alt="cross">
                        <button class="plus_btn">+</button>
                        <span class="quantity">${val_quantity}</span>
                        <button class="minus_btn">-</button>
                    </div>
                </div>`
    let thediv = document.querySelector('.card_choosed')
    thediv.innerHTML += template       
              }

}


  // inserting the elements into the modal


for (let i = 0; i < coffeeProducts.length; i++) {
  let val_id = coffeeProducts[i].id
  let val_name = coffeeProducts[i].name
  let val_category = coffeeProducts[i].category
  let val_price = coffeeProducts[i].price
  let val_quantity = 0
  let img_src = coffeeProducts[i].image
  let img_alt = img_src.replace(".jpg", "")
  let selection_total = val_price * val_quantity

  if (val_id=="c2"||val_id=="c3"||val_id=="c8"){
    let template = `<div class="choice_card_modal hiding" id="${val_id}">
                    <div class="c_c_img_modal"><img src="./resources/${img_src}" alt="${img_alt}"></div>
                    <div class="first_div_modal">
                        <p>name: </p>     <span class="name_spans">${val_name}</span>
                        <p>category: </p> <span>${val_category}</span>
                        <p>prix: </p>     <span>${val_price} HD</span>
                    </div>
                    </div>`
  
  let the_modal = document.querySelector('.modal')
  the_modal.innerHTML += template
  }
  else{
    let template = `<div class="choice_card_modal " id="${val_id}">
                    <div class="c_c_img_modal"><img src="./resources/${img_src}" alt="${img_alt}"></div>
                    <div class="first_div_modal">
                        <p>name: </p>     <span class="name_spans">${val_name}</span>
                        <p>category: </p> <span>${val_category}</span>
                        <p>prix: </p>     <span>${val_price} HD</span>
                    </div>
                    </div>`
  
  let the_modal = document.querySelector('.modal')
  the_modal.innerHTML += template
  }
}


// live search on/off


let live_search = document.querySelector('.zoom_ico')
live_search.addEventListener('click', () => {
  let the_modal = document.querySelector('.modal')
  the_modal.classList.toggle('hiding')
})


// life search 


let search_bar = document.querySelector('#search_bar');
search_bar.addEventListener('input', (e) => {
  let spans = document.querySelectorAll(".name_spans")
  let search_input_val = `${e.target.value}`.toLocaleLowerCase()
  for (let i = 1; i <= spans.length; i++) {
    let identificator = "c" + i
    let search_result = document.querySelectorAll(`#${identificator}`)
    let lala = spans[i - 1].textContent.toLocaleLowerCase()
    let isvisible = !lala.includes(search_input_val)
    search_result[0].classList.toggle("hiding", isvisible)
  }


})


// selection from the life search to the main choices menu 


for (let i = 0; i < coffeeProducts.length; i++) {
  const element_id = coffeeProducts[i].id;
  let element = document.querySelectorAll(`#${element_id}`)
  element[0].addEventListener('click', () => {
    element[0].classList.toggle("hiding")
    element[1].classList.toggle("hiding")
  })
}


// cross matchMediark to deleate an option 


let croses = document.querySelectorAll(".cross")
for (let i = 0; i < coffeeProducts.length; i++) {
  const element_id = coffeeProducts[i].id;
  let element = document.querySelectorAll(`#${element_id}`)
 croses[i].addEventListener("click", ()=>{
     element[0].classList.toggle("hiding")
    element[1].classList.toggle("hiding")
 })

}


// ading "+" btn func to increase quantity
// ading "-" btn func to decrease quantity
// ading total func to calculate total price

 for (let i = 0; i < coffeeProducts.length; i++) {
  const element_id = coffeeProducts[i].id;
  let element = document.querySelector(`#${element_id}`)
  let elements = document.querySelectorAll(`#${element_id}`)
  let plus_btn = document.querySelector(`#${element_id}>.second_div>.plus_btn`)
  let minus_btn = document.querySelector(`#${element_id}>.second_div>.minus_btn`)
  let quantity = document.querySelector(`#${element_id}>.second_div>.quantity`)   
  let val_price = document.querySelector(`#${element_id}>.first_div>.val_price`)  
  let selection_total = document.querySelector(`#${element_id}>.first_div>.selection_total`)
  plus_btn.addEventListener('click',()=>{
    let aid = Number(quantity.textContent)
    aid++
    quantity.textContent = aid
    let total = parseFloat(val_price.textContent) * parseFloat(quantity.textContent)
    selection_total.textContent = total + " DH"
  })
  minus_btn.addEventListener('click',()=>{
    let aid = Number(quantity.textContent)
    if (aid>0) {
      aid--
    quantity.textContent = aid
    let total = parseFloat(val_price.textContent) * parseFloat(quantity.textContent) 
    selection_total.textContent = total+ " DH"
    if(aid<=0){
     elements[0].classList.toggle("hiding")
     elements[1].classList.toggle("hiding")
    }
    }
  let total = parseFloat(val_price.textContent) * parseFloat(quantity.textContent)
    selection_total.textContent = total + " DH"
  })
  
 }



// calcule et remplisage de totals type 
function total_stuff(){
  let total_ht=0
let les_totaux = document.querySelectorAll('.choice_card')
let total_ht_tar = document.querySelector(".very_total")
let TVA_tar = document.querySelector(".t_v_a")
let TTC = document.querySelector(".ttc")
for (let i = 0; i < les_totaux.length; i++) {
  if (les_totaux[i].classList.length === 1) {
    const element_id = coffeeProducts[i].id;
    let element = document.querySelectorAll(`#${element_id}>.first_div>.selection_total`)
    for (let j = 0; j < element.length; j++) {
      total_ht += parseFloat(element[j].textContent);
    }
    
    
  }
  total_ht_tar.textContent = total_ht + " DH"
  let aid = total_ht * 0.055 
  TVA_tar.textContent = aid.toFixed(2) + " DH"
  let aid2 = total_ht - aid 
  TTC.textContent = aid2.toFixed(2) + " DH"

}
}
let main = document.querySelector("body")
total_stuff()
main.addEventListener('click' , ()=>{
total_stuff()
})




// validation des carte bancair ===>
// nom validation

let the_name_input = document.querySelector('.Nom')
the_name_input.addEventListener('focusout', ()=>{
  let input_value = the_name_input.value
  let name_regex = /^([a-z\d]{5,24})$/i ;
  if (!name_regex.test(input_value)) {
    alert("entrer-vous une nom valid!!!")
    the_name_input.value = null
  }
})

// prenom validation

let the_prenom_input = document.querySelector('.Prenom')
the_prenom_input.addEventListener('focusout', ()=>{
  let input_value = the_prenom_input.value
  let prenom_regex = /^([a-z\d]{5,24})$/i ;
  if (!prenom_regex.test(input_value)) {
    alert("entrer-vous une Prenom valid!!!")
    the_prenom_input.value = null
  }
})

//card number validation

let the_Card_number_input = document.querySelector('.Card_number')
the_Card_number_input.addEventListener('focusout', ()=>{
  let input_value = the_Card_number_input.value
  let Card_number_regex_visa = /^4[0-9]{12}(?:[0-9]{3})?$/ ;
  let Card_number_regex_mastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
  if (!Card_number_regex_visa.test(input_value) && !Card_number_regex_mastercard.test(input_value)) {
    alert("entrer-vous une Carte de credit nombre valid!!!")
    the_Card_number_input.value = null
  }
})

//CCV validation

let the_Card_CCV_input = document.querySelector('.CCV')
the_Card_CCV_input.addEventListener('focusout', ()=>{
  let input_value = the_Card_CCV_input.value
  let Card_CCV_regex = /^[0-9]{3,4}$/ ;
  if (!Card_CCV_regex.test(input_value) && !Card_CCV_regex_mastercard.test(input_value)) {
    alert("entrer-vous une CCV nombre valid!!!")
    the_Card_CCV_input.value = null
  }
})

//expiration date

let the_Card_EX_date_input = document.querySelector('.EX_date')
the_Card_EX_date_input.addEventListener('focusout', ()=>{
  let input_value = the_Card_EX_date_input.value
  let Card_EX_date_regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/ ;
  if (!Card_EX_date_regex.test(input_value) && !Card_EX_date_regex_mastercard.test(input_value)) {
    alert("entrer-vous une EX_date nombre valid!!!")
    the_Card_EX_date_input.value = null
  }
})