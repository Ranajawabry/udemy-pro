console.log(document.querySelector('.register_now'))
console.log(document.querySelector('.login'))
function translateRight(){
    console.log('hiiiiii');

    console.log(document.querySelector('.modal-content '))
    document.querySelector('.login-modal-content ').classList.add('translate_right');
    document.querySelector('.register-modal-content ').classList.add('translate_right');

   
}

function translateLeft(){
    console.log('hiiiiii');

    console.log(document.querySelector('.modal-content '))
    document.querySelector('.login-modal-content ').classList.remove('translate_right');
    document.querySelector('.register-modal-content ').classList.remove('translate_right');

   
}

// document.querySelector('.register_now').addEventListener('click',()=>{
   
//    
// })

// carousel JS code
$(document).ready(function () {
    $('.carousel-01').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900:{
                items:3
            },
            1000: {
                items: 4
            }
        }
    })

    $('.carousel-02').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.carousel-03').owlCarousel({
        loop: true,
        margin: 32,
        center: true,
        dots: false,
        onDragged: moveSlide,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
    $('.carousel-04').owlCarousel({
        loop: true,
        onDragged: moveSlide,
        dots: false,
        items: 1
    })
});
// draggrd function
function moveSlide(event){
    console.log(event)
    let slideDirection;
    if (event.relatedTarget._drag.direction == 'left') {
        slideDirection = 'next'
    } else {
        slideDirection = 'prev'
    }
    if (event.target.classList.contains('carousel-03')) {

        slideDirection == 'next' ? $('.carousel-04').trigger('next.owl.carousel') : $('.carousel-04').trigger('prev.owl.carousel');
    }
    else {
        slideDirection == 'next' ? $('.carousel-03').trigger('next.owl.carousel') : $('.carousel-03').trigger('prev.owl.carousel');
    }
}



////////////////// register section js///////////////////
//    counter down JS code
var deadline = new Date('2024-12-31T23:59:59');

// Update the countdown timer every second
function countDown(){
    var now = new Date().getTime();

    // Calculate the time remaining between now and the deadline
    var timeRemaining = deadline.getTime() - now;

    // Check if the deadline has passed
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById('counter').innerHTML = 'Deadline has passed';
        return;
    }

    // Calculate the days, hours, minutes, and seconds remaining
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML =  String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');

}
var countdownTimer = setInterval( countDown, 1000); // Update every second



//   form style JScode
let placeholderText;
function disablePlaceholder(ele){
   
    placeholderText = ele.getAttribute('placeholder');
    ele.removeAttribute('placeholder');
}

function enablePlaceholder(ele){
    if (!ele.value.trim()) {
        ele.setAttribute('placeholder', placeholderText);
    }
}

///////////////////////////





 console.log( "the offsetTop of footer is : "+ document.querySelector('.footer').offsetTop)

window.addEventListener('scroll',()=>{
   
    console.log("the scroll y is :" + window.scrollY)
    console.log( "the offsetTop of footer is : "+ document.querySelector('.footer').offsetTop)
    
    if(window.scrollY < document.querySelector('.footer').offsetTop){
       console.log('yesssss')
        // document.querySelector('.footer-text').classList.add('d-none');
    }
    else{
        console.log('noooo')
        document.querySelector('.footer-text').classList.remove('d-none');

    }
})
