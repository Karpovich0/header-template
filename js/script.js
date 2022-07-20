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
            arrow.parentElement.classList.toggle("menu__item-opened");
        }))
    }
} else {
        document.body.classList.add("body--pc");
}