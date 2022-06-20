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

const mobileDRopdown = document.querySelectorAll(".mobiledropdown")
const openLink = document.querySelectorAll(".open-link")

