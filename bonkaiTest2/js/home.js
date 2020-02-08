
//home javascript 
//javascript for slider on homepage
let sliderImages = document.querySelectorAll('.slide'),
     arrowLeft = document.querySelector('#arrow-left'),
     arrowRight = document.querySelector('#arrow-right'),
     current = 0; 

//clear all images
function reset(){ 
    for(let i = 0; i < sliderImages.length; i++){ 
        sliderImages[i].style.display = 'none'; 

    };
};

//Initializes slider
function startSlide(){ 
    reset();
    sliderImages[0].style.display = 'block';
}; 

//show Previous 
function slideLeft(){ 
    reset(); 
    sliderImages[current -1].style.display = 'block'; 
    current--;
}; 

//left arrow click
arrowLeft.addEventListener('click', function(){
    if(current === 0 ){ 
        current = sliderImages.length;

    } 
    slideLeft();
}); 

//show next
function slideRight(){ 
    reset(); 
    sliderImages[current + 1 ].style.display = 'block'; 
    current++;

}

arrowRight.addEventListener('click',function(){ 
    if(current === sliderImages.length -1){ 
        current = -1
        }
    slideRight();
})


startSlide(); 
