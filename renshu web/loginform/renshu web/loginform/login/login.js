login = () =>{
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const hint = document.getElementById("hint")
    const erroMsg = document.getElementById("errorid")
    
    erroMsg.innerText="";


    if(username === "Kazuhiro" && email === "scheisse@mail" && password === "egal"){
        alert("OMG how did you know it")
        erroMsg.innerHTML = `<a class="gonext" href = ../renshu/renshu.html>Go Next!!</a>`
    } else{
        erroMsg.innerText = `bist du dunn? go away!!`
        hint.innerHTML =`<button type="button" onclick="getHint()">Hint<button>`
    }

    getHint = () => {
        const hintmsg = "Just ask me! :)";
        const hintEl =  document.getElementById("hint1")
        hintEl.innerText = hintmsg
        
        hintEl.classList.add("showHint")
    }
}


document.addEventListener("DOMContentLoaded", () =>{ 
    const rainContainer = document.getElementById("rain-container")

    createRain = () =>{
        const rain = document.createElement("div")
        rain.classList.add("rain")

        const startRainPosition = Math.random() * window.innerWidth;
        rain.style.left = `${startRainPosition}px`;

        const rainDuraition = Math.random() * 7 + 5;
        rain.style.animationDuration = `${rainDuraition}s`

        const rainHeight = Math.random() * 15 + 15;
        rain.style.height = `${rainHeight}px`;

        const rainWidth = Math.random() * 2 + 1
        rain.style.width = `${rainWidth}px`

        const rainOpacity = Math.random() * 1 
        rain.style.opacity = rainOpacity

        const rainDelay  = Math.random() * 1
        rain.style.animationDelay = `${rainDelay}`
     
        rainContainer.appendChild(rain)

        rain.addEventListener("animationend", () => {
            rain.remove();
        });

     }
     setInterval(createRain, 200)
   
})
