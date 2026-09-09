document.addEventListener("DOMContentLoaded", () => {
    
    const svgs = document.querySelectorAll(".image-container svg");
    svgs.forEach(svg => {
        if (svg.getAttribute("xmlns") === "http://w3.org") {
            svg.setAttribute("xmlns", "http://w3.org");
        }
    });

    
    const postCards = document.querySelectorAll(".post-card");
    postCards.forEach(card => {
        card.addEventListener("click", () => {
            
            postCards.forEach(c => c.style.borderColor = "transparent");
            
            
            card.style.border = "1px solid #ff3e3e";
            
            
            const title = card.querySelector(".post-title").textContent;
            console.log(`Você está lendo: ${title}`);
        });
    });
});
