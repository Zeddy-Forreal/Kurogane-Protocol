const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.onmouseenter = () => {
        card.classList.add('active');
        cards.forEach(c => { if(c !== card) c.style.filter = 'brightness(0.3) saturate(0.5)'; });
    };
    card.onmouseleave = () => {
        card.classList.remove('active');
        cards.forEach(c => { c.style.filter = ''; });
    };
});