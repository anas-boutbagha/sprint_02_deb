





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


//verification des form in the focusout

function Error_show(input, message) {
    input.classList.remove('border-2');
    input.classList.remove('border-green-600');
    input.classList.add('border-2');
    input.classList.add('border-red-600');
    let error_s = input.parentElement.querySelector('.error-msg');
    error_s.textContent = message;
    error_s.classList.remove('hidden');
    swal({
        title: "Oooops!!",
        text: message,
    });
    input.value = ""
    return false;
}
function clear_error(input) {
    input.classList.remove('border-2');
    input.classList.remove('border-red-600');
    input.classList.add('border-2');
    input.classList.add('border-green-600');
    input.parentElement.querySelector('.error-msg').classList.add('hidden');
}
function showcase_error(input) {
    input.classList.add('border-2');
    input.classList.add('border-red-600');
    input.classList.remove('border-2');
    input.classList.remove('border-green-600');
    input.parentElement.querySelector('.error-msg').classList.add('hidden');
}
function name_verif() {
    let name_inp = document.querySelector('.nom_inp')
    const name_regex = /^(?=.{2,50}$)[A-Za-zÀ-ÖØ-öø-ÿŒœ0-9]+(?:[ '’\-&.][A-Za-zÀ-ÖØ-öø-ÿŒœ0-9]+)*$/;
    name_inp.addEventListener('focusout', () => {
        if (!name_inp.value) {
            return Error_show(name_inp, 'Product name is required');
        }
        if (!name_regex.test(name_inp.value)) {
            return Error_show(name_inp, 'Enter-vous un nom valid');
        }
        clear_error(name_inp);

        return true;
    })
}
function price_verif() {
    let price_inp = document.querySelector('.price_inp')

    const price_regex = /^(?:0|[1-9]\d{0,5})(?:\.\d{1,2})?$/;
    price_inp.addEventListener('focusout', () => {
        if (!price_inp.value) {
            return Error_show(price_inp, 'Produit prix is required');
        }
        if (!price_regex.test(price_inp.value)) {
            return Error_show(price_inp, 'Enter-vous un prix valid');
        }

        clear_error(price_inp);

        return true;
    })
}
function discription_verif() {
    let discription_inp = document.querySelector('.discr_inp')
    const discription_regex = /^(?=[\s\S]{3,300}$)(?=[\s\S]*[A-Za-zÀ-ÖØ-öø-ÿŒœ])[A-Za-zÀ-ÖØ-öø-ÿŒœ0-9\s.,;:!?'’"«»()\-&%€\/]+$/;
    discription_inp.addEventListener('focusout', () => {

        if (!discription_inp.value) {
            return Error_show(discription_inp, 'La discription du produit est obligatoir');
        }
        if (!discription_regex.test(discription_inp.value)) {
            return Error_show(discription_inp, 'Entez-vous une discription valide');
        }

        clear_error(discription_inp);

        return true;
    })
}
function url_verif() {
    let url_inp = document.querySelector('.url_inp')

    const url_regex = /^https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    url_inp.addEventListener('focusout', () => {
        if (!url_inp.value) {
            swal({
                title: "avirtisement",
                text: "the image link is optionnel but if you have one please write it down",
            });
            url_inp.classList.remove('border-2');
            url_inp.classList.remove('border-red-600');
            url_inp.classList.add('border-2');
            url_inp.classList.add('border-green-600');
            url_inp.parentElement.querySelector('.error-msg').classList.add('hidden');
            return true;
        }
        if (!url_regex.test(url_inp.value)) {
            return Error_show(url_inp, 'Enter-vous un url valid');
        }

        clear_error(url_inp);

        return true;
    })
}
function promotion_percentege_verif() {
    let promotion_percentege_inp = document.querySelector('.promotion_inp')
    const promotion_percentege_regex = /^[1-9]\d?$/;
    console.log(promotion_percentege_inp);

    promotion_percentege_inp.addEventListener('focusout', () => {

        if (!promotion_percentege_inp.value) {
            return Error_show(promotion_percentege_inp, 'le percantege du promotion du produit est obligatoir');
        }
        if (!promotion_percentege_regex.test(promotion_percentege_inp.value)) {
            return Error_show(promotion_percentege_inp, 'Entez-vous un percentage valide');
        }

        clear_error(promotion_percentege_inp);

        return true;
    })
}
function date_verif() {
    let date_inp = document.querySelector('.date_inp')
    function todayString() {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    date_inp.addEventListener('focusout', () => {

        if (!date_inp.value) {
            return Error_show(date_inp, 'la date de fin du promo est obligatoir');
        }
        if (date_inp.value < todayString()) {
            return Error_show(date_inp, 'Entez-vous une date valide');
        }

        clear_error(date_inp);

        return true;
    })
}
function promotion_verif() {
    const selacted = document.querySelector('.promo_radio2');
    const non_selected = document.querySelector('.promo_radio2');
    selacted.addEventListener('change', () => {
        if (selacted.checked) {
            promotion_percentege_verif();
            date_verif();
        }
        if (non_selected.checked) {
            let promotion_percentege_inp = document.querySelector('.promotion_inp')
            clear_error(promotion_percentege_inp)
            promotion_percentege_inp.value = null
            let date_inp = document.querySelector('.date_inp')
            clear_error(date_inp)
            date_inp.value = null
            return true
        }

    })

}

function valid_inputs_step1() {
    let discription_inp = document.querySelector('.discr_inp')
    let price_inp = document.querySelector('.price_inp')
    let name_inp = document.querySelector('.nom_inp')
    const selacted = document.querySelector('.promo_radio2');
    let date_inp = document.querySelector('.date_inp')
    let promotion_percentege_inp = document.querySelector('.promotion_inp')

    if (!name_inp.value) {
        showcase_error(name_inp)
         return false
    }
    else if (!price_inp.value) {
        showcase_error(price_inp)
         return false
    }
    else if (!discription_inp.value) {
        showcase_error(discription_inp)
         return false
    }
    else if (selacted.checked) {
         if (!date_inp.value) {
            showcase_error(date_inp)
            return false
         }
         else if (!promotion_percentege_inp.value) {
            showcase_error(promotion_percentege_inp)
            return false
         }
    }
    else{ return true }
}

function switching_between_pages() {
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

    next1.addEventListener('click', () => {
        if (valid_inputs_step1() || true) {
            selec1.classList.add('hidden')
            selec2.classList.remove('hidden')
            step2.classList.add('step-neutral')
        }
    })
    goback1.addEventListener('click', () => {
        selec2.classList.add('hidden')
        selec1.classList.remove('hidden')
        step2.classList.remove('step-neutral')
    })
    next2.addEventListener('click', () => {
        selec2.classList.add('hidden')
        selec3.classList.remove('hidden')
        step3.classList.add('step-neutral')
    })
    goback2.addEventListener('click', () => {
        selec3.classList.add('hidden')
        selec2.classList.remove('hidden')
        step3.classList.remove('step-neutral')
    })
}

//functions calling

switching_between_pages()
promotion_section_dynamic()

//verif irt
name_verif()
price_verif()
discription_verif()
url_verif()
promotion_verif()