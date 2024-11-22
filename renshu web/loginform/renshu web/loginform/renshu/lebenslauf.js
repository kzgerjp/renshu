let img = document.querySelector(".lebenslauf");
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");

img.onclick = (event) => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
}


let span = document.getElementsByClassName("close")[0];

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const imgOver = document.querySelector(".img1")
    imgOver.onclick = () => {
        imgOver.classList.add("clicked")

        imgOver.addEventListener("transitionend", () => {
            imgOver.classList.add("hideoverlay"); 
        });
    }

const toggleButton = document.querySelector(".buttonmenu")
    toggleButton.addEventListener("click",() => {
        let menu = document.querySelector(".griditem1")
        let menu2 = document.querySelector(".griditem3")
        let caffeePragraph = document.querySelector(".caffemenue")
        let caffeePragraph2 = document.querySelector(".caffemenue2")
        let p2 = document.querySelector(".p2")
        let confiButton = document.querySelector(".confirmbutton")
        let orderButton = document.querySelector(".orderbutton")
            if(!menu.classList.contains("show")){
                menu.style.display = "flex";
                menu2.style.display = "flex"
                menu.classList.toggle('show')
                menu2.classList.toggle('show');
                caffeePragraph.style.display = "flex";
                caffeePragraph2.style.display = "flex";
                p2.style.transform = "translateX(20px)";
                toggleButton.textContent = "Hide Menu";
                confiButton.classList.toggle("show2")
                orderButton.classList.toggle("show2")
        }else if( menu.style.display === "flex"){
                menu.classList.remove('show');
                menu2.classList.remove('show');
                confiButton.classList.remove("show2")
                orderButton.classList.remove("show2")
                caffeePragraph.style.display = "none";
                caffeePragraph2.style.display = "none"
                p2.style.transform = "translateX(0px)"
                toggleButton.textContent = "Would you like to order caffee?"
            
        }
    
    })

    
const orderingButton = document.getElementById("ordering");

let orderevent = () => {
    
    let americano = parseInt(document.getElementById("Americano").value) || 0;
    let espresso = parseInt(document.getElementById("Espresso").value) || 0;
    let flat = parseInt(document.getElementById("Flat").value) || 0;
    let cappuccino = parseInt(document.getElementById("Cappuccino").value) || 0;
    let cafeLatte = parseInt(document.getElementById("Cafelatte").value) || 0;
    let matchaLatte = parseInt(document.getElementById("Matchalatte").value) || 0;
    let caramelMacchiato = parseInt(document.getElementById("caramelmacchiato").value) || 0;

    let americanoP = 1.0;
    let espressoP = 1.5;
    let flatwhiteP = 2.3;
    let cappuccinoP = 2.5;
    let cafeLatteP = 3.0;
    let matchaLatteP = 3.2;
    let caramelMacchiatoP = 3.7;

 
    let totalPrice = (americano * americanoP +
                      espresso * espressoP +
                      flat * flatwhiteP +
                      cappuccino * cappuccinoP +
                      cafeLatte * cafeLatteP +
                      matchaLatte * matchaLatteP +
                      caramelMacchiato * caramelMacchiatoP).toFixed(2);

   
    let menu2 = document.querySelector(".griditem3");

 
    let yourOrder = `<div class="orderdiv"><ul class="ordercontainer"><span class="ordertitle">Your Order</span>`;

   
    if (americano > 0) {
        yourOrder += `<li class="orderlist">Americano: <span class="orderspan">${americano}</span><button class="delete" data-drink="americano">-</button></li>`;
    }
    if (espresso > 0) {
        yourOrder += `<li class="orderlist">Espresso: <span class="orderspan">${espresso}</span><button class="delete" data-drink="espresso">-</button></li>`;
    }
    if (flat > 0) {
        yourOrder += `<li class="orderlist">Flat White: <span class="orderspan">${flat}</span><button class="delete" data-drink="flat">-</button></li>`;
    }
    if (cappuccino > 0) {
        yourOrder += `<li class="orderlist">Cappuccino: <span class="orderspan">${cappuccino}</span><button class="delete" data-drink="cappuccino">-</button></li>`;
    }
    if (cafeLatte > 0) {
        yourOrder += `<li class="orderlist">Cafe Latte: <span class="orderspan">${cafeLatte}</span><button class="delete" data-drink="cafeLatte">-</button></li>`;
    }
    if (matchaLatte > 0) {
        yourOrder += `<li class="orderlist">Matcha Latte: <span class="orderspan">${matchaLatte}</span><button class="delete" data-drink="matchaLatte">-</button></li>`;
    }
    if (caramelMacchiato > 0) {
        yourOrder += `<li class="orderlist">Caramel Macchiato: <span class="orderspan">${caramelMacchiato}</span><button class="delete" data-drink="caramelMacchiato">-</button></li>`;
    }

    
    yourOrder += `</ul><p class="totalp">Total Prices: ${totalPrice} €</p></div>`;

    
    menu2.innerHTML = yourOrder;

};

orderingButton.addEventListener("click", orderevent)

const besttellenbutton = document.querySelector(".orderbutton")
      besttellenbutton.addEventListener("click", () =>{
        let menu2 = document.querySelector(".griditem3")
        menu2.innerHTML = ""
        const inputs = document.querySelectorAll("#Americano, #Espresso, #Flat, #Cappuccino, #Cafelatte, #Matchalatte, #caramelmacchiato");
        inputs.forEach(input => input.value = 0);
        menu2.innerHTML = `<div class="orderMessage">Thank you for ordering<br>pls just for a moment :)<button class="more">more<br>ordering?</button></div>`
      })

let menu2 = document.querySelector(".griditem3");
      menu2.onclick = (event) => {
        if(event.target && event.target.classList.contains("delete")){
            const drinks = event.target.getAttribute("data-drink")

            switch(drinks){
                case "americano":
                    document.getElementById("Americano").value = 0
                    break
                
                case "espresso":
                    document.getElementById("Espresso").value = 0
                    break
                
                case "flat":
                    document.getElementById("Flat").value = 0
                    break
                    
                case "cappuccino":
                    document.getElementById("Cappuccino").value = 0
                    break

                case "cafeLatte":
                    document.getElementById("Cafelatte").value = 0
                    break
                
                case "matchaLatte":
                    document.getElementById("Matchalatte").value = 0
                    break

                case "caramelMacchiato":
                    document.getElementById("caramelmacchiato").value = 0
                    break
                
            }

            orderevent()
        }

      }