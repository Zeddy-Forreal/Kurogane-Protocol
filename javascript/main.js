let cards = document.querySelectorAll(".card");


cards.forEach((card)=>{
    card.onmouseenter = ()=>{
        card.style.filter = "brightness(1)"
        cards.forEach((car)=>{
            if (card != car){
                car.style.filter = "brightness(0.3)"
            }
        })
        card.classList.add("active")
    }
    card.onmouseleave = ()=>{
        cards.forEach((car)=>{
            car.style.filter = "brightness(1)"
        })
        card.classList.remove("active")
    }
})