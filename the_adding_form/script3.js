




function promotion_section_dynamic() {
    let promo1 = document.querySelector('.promo_radio1')
    let promo2 = document.querySelector('.promo_radio2')
    let promo_sec = document.querySelector('.promotion_sec')
    promo2.addEventListener('input', () => {
        promo_sec.classList.remove('hidden')

    })
    promo1.addEventListener('input', () => {
        promo_sec.classList.add('hidden')

    })
}

function switching_between_pages(){
    let next1 = document.querySelector('.nextbtn1')
    let next2 = document.querySelector('.nextbtn2')
    let goback1 = document.querySelector('.gobackbtn1')
    let goback2 = document.querySelector('.gobackbtn2')
    let selec1 = document.querySelector('.sec_01')
    let selec2 = document.querySelector('.sec_02')
    let selec3 = document.querySelector('.sec_03')
    let step1 = document.querySelector('.lis1')
    let step2 = document.querySelector('.lis2')
    let step3 = document.querySelector('.lis3')
    console.log(step1 , step2 , step3);
        
    next1.addEventListener('click',()=>{
        selec1.classList.add('hidden')
        selec2.classList.remove('hidden')
        step2.classList.add('step-neutral')
    })
    goback1.addEventListener('click',()=>{
        selec2.classList.add('hidden')
        selec1.classList.remove('hidden')
        step2.classList.remove('step-neutral')
    })
    next2.addEventListener('click',()=>{
        selec2.classList.add('hidden')
        selec3.classList.remove('hidden')
        step3.classList.add('step-neutral')
    })
    goback2.addEventListener('click',()=>{
        selec3.classList.add('hidden')
        selec2.classList.remove('hidden')
        step3.classList.remove('step-neutral')
    })
}














switching_between_pages()
promotion_section_dynamic()