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
