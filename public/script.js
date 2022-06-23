const dropDowns = document.querySelectorAll(".dropdown")
const mobileMenu = document.querySelector(".mobilemenu")
const hamburger = document.querySelector("#hamburger")
const mobileDropDown = document.querySelectorAll(".mobileDropdown") 

const removeActiveClass = () => {
    dropDowns.forEach(dropdown => {
        dropdown.classList.remove("active")
    })
}
const removeActiveClassMobile = () => {
    mobileDropDown.forEach(dropdown => {
        dropdown.classList.remove("active")
    })
}

dropDowns.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        removeActiveClass()
        dropdown.classList.add("active")

    })
})

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show")
    if(mobileMenu.classList.contains("show")){
        hamburger.setAttribute("src", "images/icon-close.svg")
    }else{
        hamburger.setAttribute("src", "images/icon-hamburger.svg")
    }
})

mobileDropDown.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        removeActiveClassMobile()
        dropdown.classList.add("active")

    })
})
