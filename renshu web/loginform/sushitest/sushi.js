let correctAnswers = {
    sushi: "nigiri",
    sushi1: "1€",
    sushi2: "gunkan",
    sushi3: "makisu",
    sushi4: "salmon",
    sushi5: "konnichiwa",
    sushi6: "arigatou",
    sushi7: "wunderbar",
 };
 
    
 
 const resultButton = () => {
    let points = 0
    let right1 = document.querySelectorAll(`.right`)
    let showpoints = document.getElementById(`points`)
    let allSelected = true

 for(let name in correctAnswers){
    let select = document.querySelector(`input[name="${name}"]:checked`)
    let selectedradio = select.value

    if (!select) {
        allSelected = false;
        return;
    }
    
    right1.forEach(element => {
        element.classList.add(`correct`) })
    
       
        if(selectedradio === correctAnswers[name]){
            points ++;
            showpoints.innerText = `total:${points}`
        }
        if(points === 8){
        let goNext = document.querySelector(`.next`)
        goNext.innerHTML = `<a class="next" href=>Conglaturation!!!</a>`
        }
 }
}

const resetButton = () =>{
    let right1 = document.querySelectorAll(`.right`)
    right1.forEach(element =>{
        element.classList.remove(`correct`)
    })
    let showpoints = document.getElementById(`points`)
    showpoints.innerText = ""

    for(let name in correctAnswers){
        let select = document.querySelector(`input[name="${name}"]:checked`)
        if(select)
        select.checked = false
}
}