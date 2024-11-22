startCountdown = () =>{
    let countdown = 10;
    let btnme = document.querySelector(".me") 
    let pmeEl = document.querySelector(".pme")
    console.log(pmeEl)

    let interval = setInterval(()=>{
        btnme.classList.add("countdown");
        btnme.textContent= countdown;
        countdown --;
        if(countdown < 0) {
            clearInterval(interval);
            btnme.classList.remove("countdown");
            btnme.textContent = "Boom!!!";
            pmeEl.innerHTML = `<a href="lebenslauf.html" target="_blank">click!!!</a>`
      
        } },1000 )
    }

    imageGet = document.querySelectorAll(".change")
    imageGet.forEach(element => {
        let originalImg = element.src;
        element.addEventListener(`mouseover`,()=>{
            const hoverimg = element.getAttribute("data-hover")
                element.src = hoverimg;
            
            
            
        })
   
        element. addEventListener(`mouseout`,()=>{
            element.src = originalImg
        })
    })

   
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("rating-value");
    const rateMsg = document.getElementById("ratemsg")
    let isMouseDown = false;

    let currentRating = 0;  

  
    stars.forEach(star => {
        star.addEventListener("mousedown", function(event) {
            isMouseDown = true;  
            updateRating(event);
        });
    });

  
    window.addEventListener("mousemove", function(event) {
        if (isMouseDown) {
            updateRating(event);
        }
    });


    window.addEventListener("mouseup", function() {
        isMouseDown = false;
    });

   
    function updateRating(event) {
        const rect = document.querySelector(".stars").getBoundingClientRect(); 
        const mouseX = event.clientX - rect.left;  // 
        const starWidth = rect.width / 5; 

      
        const newRating = Math.ceil(mouseX / starWidth);

      
        if (newRating !== currentRating) {
            currentRating = newRating;
            ratingValue.textContent = currentRating; 
            updateStarColors();
            rateMsgFunc()
        }
    }
    function updateStarColors() {
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute("data-value"));
            if (starValue <= currentRating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }
    rateMsgFunc = () =>{
        if(currentRating === 5){
            rateMsg.textContent = "You are so beautiful!!"
        } else if (currentRating <= 1){
            rateMsg.textContent = "what a Bitch"
        }
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const petalsContainer = document.getElementById("petals");

    
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

       
        const startPositionX = Math.random() * window.innerWidth; 
        petal.style.left = `${startPositionX}px`;

        
        const animationDuration = 8 + Math.random() * 7; 
        petal.style.animationDuration = `${animationDuration}s`;

        
        const petalSize = 20 + Math.random() * 20; 
        petal.style.width = `${petalSize}px`;
        petal.style.height = `${petalSize}px`;

        
        const randomX = Math.random() * 400 - 200;  
        const randomRotation = Math.random() * 360; 
        const randomDelay = Math.random() * 1; 

        petal.style.animationDelay = `${randomDelay}s`; 
        petal.style.transform = `rotate(${randomRotation}deg)`; 
        

        
        petal.style.setProperty('--x-offset', `${randomX}px`);

        
        petalsContainer.appendChild(petal);

        
        setTimeout(() => {
            petal.remove();
        }, animationDuration * 1000); 
    }

    
    setInterval(createPetal, 200); 
});

