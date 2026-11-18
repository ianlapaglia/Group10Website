let slideIndex = 0;
autoSlideshow()
function autoSlideshow(){
    let slides = document.getElementsByClassName("slide");  //List of slides
    
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length - 1){
        slideIndex = 0;
    }
    
    slides[slideIndex].style.display = "block";

    setTimeout(autoSlideshow, 2000); // Change image every 2 seconds
}
