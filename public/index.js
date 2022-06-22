const dropDownMenu = document.querySelectorAll(".dropmenu") 
const dropLink1 = document.querySelector(".drop-link")
const dropLink2 = document.querySelector(".drop-link2")
const dropLink3 = document.querySelector(".drop-link3")
const dropDownMenu1 = document.querySelector(".dropmenu1") 
const dropDownMenu2 = document.querySelector(".dropmenu2") 
const dropDownMenu3 = document.querySelector(".dropmenu3") 

const removeActiveClass = () => {
    dropDownMenu.forEach(item => {
        item.classList.remove("active")
    })
}

dropLink1.addEventListener("click", () => {
    removeActiveClass()
    dropDownMenu1.classList.add("active")
    dropLink1.addEventListener("click", () => {
        dropDownMenu1.classList.contains("active")? dropDownMenu1.classList.remove("active") : dropDownMenu1.classList.add("active")
    })
})
dropLink2.addEventListener("click", () => {
    removeActiveClass()
    dropDownMenu2.classList.add("active")
    dropLink2.addEventListener("click", () => {
        dropDownMenu2.classList.contains("active")? dropDownMenu2.classList.remove("active") : dropDownMenu2.classList.add("active")
    })
})
dropLink3.addEventListener("click", () => {
    removeActiveClass()
    dropDownMenu3.classList.add("active")
    dropLink3.addEventListener("click", () => {
        dropDownMenu3.classList.contains("active")? dropDownMenu3.classList.remove("active") : dropDownMenu3.classList.add("active")
    })
})


//mobmenu toggle
const mobileMenu = document.querySelector(".mobilemenu")
const hamburgerIcon = document.querySelector("#hamburger")

hamburgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show")
    if(mobileMenu.classList.contains("show")){
        hamburgerIcon.setAttribute("src", "images/icon-close.svg")
    }else{        
        hamburgerIcon.setAttribute("src", "images/icon-hamburger.svg")
}
})


const mobileDropdown = document.querySelectorAll(".mobiledropdown")
const openLink = document.querySelectorAll(".open-link")
const mobiledropdown1 = document.querySelector(".mobiledropdown1")
const mobiledropdown2 = document.querySelector(".mobiledropdown2")
const mobiledropdown3 = document.querySelector(".mobiledropdown3")

const addHiddenClass = () => {
    openLink.forEach(link => {
        link.classList.add("hidden")
    })
}

mobiledropdown1.addEventListener("click", () => {
    const openLink = document.querySelector(".open-link1")
    addHiddenClass()
    openLink.classList.toggle("hidden")
})
mobiledropdown2.addEventListener("click", () => {
    const openLink = document.querySelector(".open-link2")
    addHiddenClass()
    openLink.classList.toggle("hidden")
})
mobiledropdown3.addEventListener("click", () => {
    const openLink = document.querySelector(".open-link3")
    addHiddenClass()
    openLink.classList.toggle("hidden")
})

