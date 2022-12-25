let elLoginBtn = document.querySelector(".login-btn");
let elCloseBtn = document.querySelector(".site__exit");
let elModal = document.querySelector(".login__modal");
let elEye = document.querySelector(".eye__See");
let elEyeNone = document.querySelector(".eye__See-none");
let Body = document.querySelector("body");
let password = document.querySelector(".password__input");
let emailBtn = document.querySelector(".email__input");
let loginBtn = document.querySelector(".login__button-modal");
let Mode = document.querySelector(".light__mode");



eyeBtn.addEventListener('click', () => {
    if(eyeBtn.getAttribute('src')=='./img/eye.svg'){
        eyeBtn.setAttribute('src','./img/eye-2.svg')
password.setAttribute('type','text')        
}else{
    eyeBtn.setAttribute('src','./img/eye.svg')
    password.setAttribute('type','password')        
    }
})

elLoginBtn.addEventListener("click", openModal);
function openModal() {
    elModal.style.display = 'block';
}

elCloseBtn.addEventListener("click", colseModal);
function colseModal() {
    elModal.style.display = 'none'
}

loginBtn.addEventListener("click", () => {
    if(password > 8){
        password.style.border = '2px solid red'
    }
})

function validated(){
    if (password.value.length < 9){
        password.style.border = "2px solid #FF3B30";
        password.focus()
        return false;
    } 
    if (emailBtn.value.length < 9){
        emailBtn.style.border = "2px solid #FF3B30";
        emailBtn.focus()
        return false
    } 
}

Mode.addEventListener("click", () => {
    Body.classList.toggle("ligh__mode")
})

const $a = function (selector) {
    return document.querySelectorAll(selector);
 }

let index = 0;
function Storage(data, el) {
   localStorage.setItem(data, el)
}

let lIndex = localStorage.getItem('index')

const $ = function (selector) {
    return document.querySelector(selector);
 }

function slider() {
   let lIndex = localStorage.getItem('index')

   if (lIndex > $a('.slide-item').length - 1) {
      index = 0
      Storage("index", index)
   }

   if (lIndex < 0) {
      index = $a('.slide-item').length - 1;
      Storage("index", index)
   }
   lIndex = localStorage.getItem('index')

   let width = $('.slide-content').offsetWidth

$('.slide-list').style.transform = translateX(-${lIndex * (width + 2)} px )
}
slider()




$('.next').addEventListener('click', () => {
   index++;
   Storage("index", index)
   slider()
})

$('.prev').addEventListener('click', () => {
   index--;
   Storage("index", index)
   slider()
})


setInterval(() => {
   index=localStorage.getItem('index')
   index++;
   Storage("index", index)
   lIndex =  localStorage.getItem('index')
   slider()
   indicate(lIndex)
}, 5000)

$a('.ind').forEach((e, i) => {
   e.addEventListener('click', () => {
      index = i
      Storage("index", index)
      lIndex =  localStorage.getItem('index')
      slider()
      indicate(lIndex)
   })
})

indicate(index)

function indicate(index) {
   $a('.ind').forEach((e, i) => {
      if (i ==localStorage.getItem('index')) {
         e.classList.add('current')
      } else {
         e.classList.remove('current')
      }
   })
}