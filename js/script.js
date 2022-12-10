


// Social Icons

const lineUp = document.querySelector('.line-up span')
const lineDown = document.querySelector('.line-down span')
const behance = document.querySelector('.behance')
const insta = document.querySelector('.insta')
const pin = document.querySelector('.pin')
/*
1- how to make up and down light when i hover over the icon?
    add event listener to the icon and the call back fun would be adding class to the up and down

2- how to add class with the color of the icon?
    icon would have id so based on the id the color changes

*/


behance.addEventListener('mouseenter',() =>{
    behance.style.cssText = `
        border: 1px solid white;
        background-color: rgb(0, 62, 203);
        transform: rotate(360deg) scale(1.1)
    `
})
behance.addEventListener('mouseleave',() =>{
    behance.style.cssText = `
        border: none;
    `
})



insta.addEventListener('mouseenter',() =>{
    insta.style.cssText = `
    border: 1px solid white;
    background-color: #E4603D; 
    transform: rotate(360deg) scale(1.1)
`

})
insta.addEventListener('mouseleave',() =>{
    insta.style.cssText = `
        border: none;
    `
})




pin.addEventListener('mouseenter',() =>{
    pin.style.cssText = `
    border: 1px solid white;
    transform: rotate(360deg) scale(1.1);
    background-color: rgb(204, 0, 0);
`
})
pin.addEventListener('mouseleave',() =>{
    pin.style.cssText = `
    border: none;
`
})





// Owl Carousel
$('#owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    stagePadding:0,
    center: false,
    nav:true,
    navText: [`<img src="imgs/left-arrow.png">`,`<img src= "imgs/right-arrow.png">`],
    responsive:{
        0:{
            items:1,
            stagePadding:100,
            margin:30,
        },
        1000:{
            items:1
        }
    }
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    stagePadding: 80,
    padding: 80,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
})





const bars = document.querySelector('.bars')
const x = document.querySelector('.x')
const myul=document.querySelector('.mobile--menu')
const switchBar = ()=>{
        bars.classList.toggle('hidden')
        x.classList.toggle('hidden')
        myul.classList.toggle('show--menu')
}

bars.addEventListener('click', switchBar)
x.addEventListener('click', switchBar)