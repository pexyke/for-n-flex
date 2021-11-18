const generateArray = function(amount) {
    let newArray = []
    let length = amount.toString().length
    let zero = ("0").repeat(length)
    for (let i = 0; i < amount; i++)
        newArray[i] = (zero + (i+1)).slice(-length)
    
    return newArray
}

const loadFunction = function() {
    console.log("Az oldal betöltődött")
}

const resetFunction = function() {
    location.reload();
}

const submitBtn = function() {
    removeElementsByClass('teszt')
    const root = document.getElementById("root")
    const btnSubmit = document.getElementById("btnsubmit")
    const arrayLength = document.getElementById("arraylength").value
    const list = generateArray(arrayLength)
    if(arrayLength <= 10000) {
    for (const item of list) {
        root.insertAdjacentHTML("beforeend",`<div class='teszt'>${item}</div>`)
    }    
    } else {
        alert("A szám nem lehet több mint 10000")
    }
}
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}



window.addEventListener("load", loadFunction)
