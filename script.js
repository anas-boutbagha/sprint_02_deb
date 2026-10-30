let menu = document.querySelector(".nav_bar_02")

function whatever() {
  menu.classList.toggle("hidden")
}
nav_bar_02_id.addEventListener("click", whatever)




const config = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 },
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 },
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 },
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 },
  },
};


for (let key1 in config) {
  let objetkey = config[key1];
  for (let key2 in objetkey) {

    let name = config[key1][key2].name;
    let price = config[key1][key2].price;
    let find1 = document.querySelector("." + key1 + "-" + key2 + "-name");
    let find2 = document.querySelector("." + key1 + "-" + key2 + "-price");
    find1.textContent = name
    find2.textContent = price + " DH"
  }
}

let selection1 = document.getElementsByClassName("width1");
let childs1 = document.querySelectorAll('.width1 > input[type="radio"]')
let selection2 = document.querySelectorAll(".width2");
let selection3 = document.querySelectorAll(".width3");
let selection4 = document.querySelectorAll(".width4");
let childs4 = document.querySelectorAll('.width4 > input[type="radio"]')





function add_a_selaction_class(i) {
  // console.log(i) // currentTarget vs target
  i.currentTarget.classList.add("option_choisi")
  if (i.currentTarget.classList.contains('option_choisi')) {
    i.currentTarget.querySelector('span').innerHTML = "✓"
  }
}

function remove_a_selaction_class1() {
  Array.from(selection1).forEach(item => {
    item.classList.remove("option_choisi")
    if (!item.classList.contains('option_choisi')) {
      item.querySelector('span').innerHTML = ""
    }
  });
}

function remove_a_selaction_class2() {
  Array.from(selection2).forEach(item => {
    item.classList.remove("option_choisi")
    if (!item.classList.contains('option_choisi')) {
      item.querySelector('span').innerHTML = ""
    }
  });

}
function remove_a_selaction_class3() {
  Array.from(selection3).forEach(item => {
    item.classList.remove("option_choisi")
    if (!item.classList.contains('option_choisi')) {
      item.querySelector('span').innerHTML = ""
    }
  });

}

function toggle_a_selaction_class(i) {
  i.currentTarget.classList.toggle("option_choisi")
  if (!i.currentTarget.classList.contains('option_choisi')) {
    i.currentTarget.querySelector('span').innerHTML = ""
  }
  if (i.currentTarget.classList.contains('option_choisi')) {
    i.currentTarget.querySelector('span').innerHTML = "✓"
  }
}
Array.from(selection1).forEach((item, i) => { // Array vs HTMLCollection vs NodeList
  item.addEventListener("click", remove_a_selaction_class1)
  item.addEventListener("click", add_a_selaction_class)
  childs1[i].addEventListener("click", (e) => {
    e.stopPropagation();
  })

});

Array.from(selection2).forEach((item, i) => {
  item.addEventListener("click", remove_a_selaction_class2)
  item.addEventListener("click", add_a_selaction_class)
});

Array.from(selection3).forEach((item, i) => {
  item.addEventListener("click", remove_a_selaction_class3)
  item.addEventListener("click", add_a_selaction_class)
});

Array.from(selection4).forEach((item, i) => {
  item.addEventListener("click", toggle_a_selaction_class)

  childs4[i].addEventListener("click", (e) => {
    e.stopPropagation();
  })
});

let btns = document.querySelectorAll('label')
let body_btn = document.querySelector('.part_2')


let all_prices_spans = document.querySelectorAll("label > div > span:last-child")
let the_menu_div = document.querySelector('.part_2')
let total_div = document.querySelector('.total')
let total_div2 = document.querySelector('.total2')

the_menu_div.addEventListener('click', total_count => {
  let total = 0
  for (let i = 0; i < all_prices_spans.length; i++) {
    if (btns[i].classList.contains('option_choisi')) {
      let aid = parseInt(all_prices_spans[i].textContent)
      total += aid
      aid = 0
    }
    total_div.textContent = total + " DH"
    total_div2.textContent = total + " DH"
  }
})

let page01 = document.querySelector('.Personnaliser')
let page02 = document.querySelector('.Récapitulatif')


let swich_buton = document.querySelectorAll('.ajou_au_pan_but')
for (let i = 0; i < swich_buton.length; i++) {
  swich_buton[i].addEventListener('click', page_swich => {
    page01.classList.toggle('hidden')
    page02.classList.toggle('hidden')
  })
}

let selectedConfig = {
  base: "nothing",
  taille: "nothing",
  lait: "nothing",
  touch: "nothing"
}
let selectedConfigprice = {
  one:0,
  two:0,
  three:0,
  four:0,
}

the_menu_div.addEventListener('click', total_count => {
  // names
  let name_selected = document.querySelectorAll('.name')
  let taille_selected = document.querySelectorAll('.taille')
  let lait_selected = document.querySelectorAll('.lait')
  let touch_selected = document.querySelectorAll('.touch')

  for (let i = 0; i < name_selected.length; i++) {
    if (name_selected[i].classList.contains('option_choisi')) {
      let aid = document.querySelectorAll("label.width1.option_choisi > div > span:first-child")
      selectedConfig.base = aid[0].textContent
      let aid2 = document.querySelectorAll("label.width1.option_choisi > div > span:last-child")
      selectedConfigprice.one = parseInt(aid2[0].textContent)
      
    }
  }
  for (let i = 0; i < taille_selected.length; i++) {
    if (taille_selected[i].classList.contains('option_choisi')) {
      let aid = document.querySelectorAll("label.width2.option_choisi > div > span:first-child")
      selectedConfig.taille = aid[0].textContent
      let aid2 = document.querySelectorAll("label.width2.option_choisi > div > span:last-child")
      selectedConfigprice.two = parseInt(aid2[0].textContent)
    }
  }
  
  for (let i = 0; i < lait_selected.length; i++) {
    if (lait_selected[i].classList.contains('option_choisi')) {
      let aid = document.querySelectorAll("label.width3.option_choisi > div > span:first-child")
      selectedConfig.lait = aid[0].textContent
      let aid2 = document.querySelectorAll("label.width3.option_choisi > div > span:last-child")
      selectedConfigprice.three = parseInt(aid2[0].textContent)
    }
  }
  for (let i = 0; i < touch_selected.length; i++) {
    if (touch_selected[i].classList.contains('option_choisi')) {
      selectedConfigprice.four = 0
      let aid = document.querySelectorAll("label.width4.option_choisi > div > span:first-child")
      selectedConfig.touch = aid[0].textContent
      let aid2 = document.querySelectorAll("label.width4.option_choisi > div > span:last-child")
      for (let i = 0; i < aid2 .length; i++) {
          selectedConfigprice.four += parseInt(aid2[i].textContent)
      }
    
      
      console.log(selectedConfigprice.four);
      
    }

  }
  let help3 = document.querySelector('.supp_targ')
  help3.textContent = "Supplément  · " + selectedConfig.touch
  let help31 = document.querySelector('.four_targ')
  help31.textContent = selectedConfigprice.four + ",00 DH"

  let help2 = document.querySelector('.lait_targ')
  help2.textContent = "lait · " + selectedConfig.lait
  let help21 = document.querySelector('.three_targ')
  help21.textContent = selectedConfigprice.three + ",00 DH"

  let help1 = document.querySelector('.name_targ')
  help1.textContent = "Base · " + selectedConfig.base
  let help11 = document.querySelector('.one_targ')
  help11.textContent = selectedConfigprice.one + ",00 DH"

  let help = document.querySelector('.taille_targ')
  help.textContent = "taille · " + selectedConfig.taille
  let help01 = document.querySelector('.two_targ')
  help01.textContent = selectedConfigprice.two + ",00 DH"
})

// let blabla="hh"
// `item.innerHTML= <p> hna kayt7t fih html o vars blasthom hka ${blabla}<p>`