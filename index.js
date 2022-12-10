// select dom element

const colorAddBtn = document.querySelector("#color-add-btn")
const colorPicker = document.querySelector("#color-picker")
const exploreBtn = document.querySelector("#explore-btn")
const primaryColorBox = document.querySelector('#primary-color-box')
const secondaryColorBox = document.querySelector('#secondary-color-box')
const colorBoxContainer = document.querySelector(".color-box-wrapper")
const positionSelect = document.querySelector("#position-select")
const widgetBox = document.querySelector(".widget-box")



colorAddBtn.addEventListener("click",openColorInput)

function openColorInput () {
    colorPicker.click()
}

colorPicker.addEventListener("input",handleColorChange)

function handleColorChange (e) {
    const newColor = e.target.value
    exploreBtn.style.backgroundColor =newColor
    primaryColorBox.innerHTML = ""
    secondaryColorBox.style.display = "block"
    secondaryColorBox.style.backgroundColor = newColor
}

primaryColorBox.addEventListener("click",handleAfterPrimaryColorSelect)

    function handleAfterPrimaryColorSelect () {
        const primaryColor = "rgb(231 213 213)"
        secondaryColorBox.style.display = "none"
        primaryColorBox.innerHTML = ` <i class="bi bi-check"></i>`
        exploreBtn.style.backgroundColor = primaryColor
    }

    positionSelect.addEventListener("change",handleChangePosition)

    function handleChangePosition (e) {
           const position  = e.target.value;

           if(position === 'bottomRight'){
            widgetBox.classList.remove("position-left")
            widgetBox.classList.add("position-right")
           }
           if(position === 'bottomLeft'){
               widgetBox.classList.remove("position-right")
               widgetBox.classList.add("position-left")
           }


    }