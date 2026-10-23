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
        let find1 =  document.querySelector("."+key1+"-"+key2+"-name");
        let find2 =  document.querySelector("."+key1+"-"+key2+"-price");
        find1.textContent = name
        find2.textContent = price+" DH"
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
    
}
    
function remove_a_selaction_class1() {
 Array.from(selection1).forEach(item => {
  item.classList.remove("option_choisi")
 });
}

function remove_a_selaction_class2() {
 Array.from(selection2).forEach(item => {
  item.classList.remove("option_choisi")
 });

}
function remove_a_selaction_class3() {
 Array.from(selection3).forEach(item => {
  item.classList.remove("option_choisi")
 });

}

function toggle_a_selaction_class(i){
  i.currentTarget.classList.toggle("option_choisi")
}
Array.from(selection1).forEach((item, i) => { // Array vs HTMLCollection vs NodeList
  item.addEventListener("click",remove_a_selaction_class1)
  item.addEventListener("click",add_a_selaction_class)
    childs1[i].addEventListener("click", (e)=>{
      e.stopPropagation();
    })
    
});

Array.from(selection2).forEach((item, i) => { 
  item.addEventListener("click",remove_a_selaction_class2)
  item.addEventListener("click",add_a_selaction_class)
});

Array.from(selection3).forEach((item, i) => { 
  item.addEventListener("click",remove_a_selaction_class3)
  item.addEventListener("click",add_a_selaction_class)
});

Array.from(selection4).forEach((item, i) => { 
  item.addEventListener("click",toggle_a_selaction_class)
  
  childs4[i].addEventListener("click", (e)=>{
      e.stopPropagation();
    })
});


const btns = document.querySelectorAll('label')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
      if(!btn.classList.contains('option_choisi'))
      {
        btn.querySelector('span').innerText = ""
      }
      console.log(!btn.classList.contains('option_choisi'));
      
      if(btn.classList.contains('option_choisi'))
      {
        btn.querySelector('span').innerText = "✓"
      }

  })
})

      let cnt_aid1=0
      let cnt_aid2=0
      let cnt=0
btns.forEach(btn => {
      if(btn.classList.contains('option_choisi'))
      {
       cnt_aid1 = btn.querySelector('div > span:last-child').innerHTML
       cnt_aid2 = cnt_aid1.replace("DH", "")
      }
      console.log(cnt_aid1);
      
     document.querySelector(".total").textContent = cnt
  })


