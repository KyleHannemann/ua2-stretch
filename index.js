let formBtn = document.getElementById("close-form");
formBtn.addEventListener('click', toggler)

let form = document.querySelector('form');

function toggler(){
    console.log("hi")
    form.classList.toggle('hide');
    if (formBtn.innerText === 'X'){
        formBtn.innerText = "+"
    }
    else{formBtn.innerText = "X"}
    
}
let emailInput = document.getElementById("email");
let nameInput = document.getElementById("name");
nameInput.addEventListener('change', changeBorder);
emailInput.addEventListener('change', changeBorder);
function changeBorder(e){
    e.target.classList.remove('error')
}


let emailList = []
function validateForm(){
    if (!nameInput.value&&!emailInput.value){
        nameInput.classList.add('error')
        emailInput.classList.add('error')
        alert("you must enter a email address and name")
    }
    else if(!nameInput.value){
        nameInput.classList.add('error')
        alert("you must enter a name")
    }
    else if(!emailInput.value){
        emailInput.classList.add('error')
        alert("you must enter a email")
    }
    else{
        let name = nameInput.value;
        let email = emailInput.value;
        let addIn = {name: name, email: email}
        emailList.push(addIn)
        console.log(emailList)
        displayThankyou();
    }
    
}
form.addEventListener('submit', callback)

function callback(event){
    event.preventDefault();
    validateForm();
}
function displayThankyou(){
    form.innerText = "Thank you for subscribing!"
    document.getElementById("mailList").style.display = 'none'
}
let cart = document.createElement('div');
let main = document.querySelector('main');
let cartItems = 0;
function addToCart(){
    if (cartItems === 0){
        cartItems = 1;
        cart.classList.add('cart-display');
        cart.innerText = 'Your Cart: 1 item';
        main.appendChild(cart);
    }
    else{
        cartItems += 1;
        cart.innerText = `Your Cart: ${cartItems} items`;
    }
}
let buttons = Array.from(document.querySelectorAll("section > div > button"));
console.log(buttons)
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', addToCart)
}
