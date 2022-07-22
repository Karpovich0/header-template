//drop down menu
function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
  }

if (isTouchDevice()) {
    document.body.classList.add("body--touch");
    let menuArrows = document.querySelectorAll(".menu__arrow");
    if(menuArrows.length>0){
        menuArrows.forEach(arrow=>arrow.addEventListener("click",function(e){
            arrow.parentElement.classList.toggle("menu__item--opened");
        }))
    }
} else {
        document.body.classList.add("body--pc");
}

//menu burger

const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if(menuIcon){    
    menuIcon.addEventListener("click", function(e){
        document.body.classList.toggle("body--lock");
        menuIcon.classList.toggle("menu__icon--active");
        menuBody.classList.toggle("menu__body--active");
        if(document.querySelector(".menu__item--opened")){
            document.querySelector(".menu__item--opened").classList.remove("menu__item--opened");
        }
    })
}

//scroll to section

let menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if(menuLinks.length>0){
    menuLinks.forEach(menuLink=>{
        menuLink.addEventListener("click",onMenuLinkClick);
    });
    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector(".header").offsetHeight;  
            
            if(menuIcon.classList.contains("menu__icon--active")){
                document.body.classList.remove("body--lock");
                menuIcon.classList.remove("menu__icon--active");
                menuBody.classList.remove("menu__body--active");
                if(document.querySelector(".menu__item--opened")){
                    document.querySelector(".menu__item--opened").classList.remove("menu__item--opened");
                }
            }
            
            window.scrollTo({
                top:gotoBlockValue,
                behavior:"smooth"
            })
            e.preventDefault();
        }
    }
}

