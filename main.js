const generateArray = function(amount) {
    let newArray = []
    
    // 10-ig
        if(amount <= 10) {
            for (let i = 0; i < amount; i++) {
                    if(i < 9) {
                    newArray.push("0" + (i+1))
                } 
                    if(i == 9) {
                newArray.push("10")
                }
            }
        }
    // 1000-ig
        if (amount <= 1000 && amount > 10) {
            for (let i = 0; i < amount; i++) {
                    if (i < 9) {
                    newArray.push("00" + (i+1))
                }   if (i < 99 && i > 9) {
                    newArray.push("0" + (i+1))
                }   if (i == 99) {
                    newArray.push("100")
                }   if(i >= 100 && i < 1000) {
                    newArray.push((i+1))
                }   
            }
        }
    //10000-ig
        if (amount <= 10000 && amount > 1000){
            for (let i = 0; i < amount; i++) {
                    if (i < 9) {
                    newArray.push("000" + (i+1))
                    }
                    if (i < 99 && i > 9) {
                    newArray.push("00" +(i+1))
                    }
                    if (i > 99 && i < 999) {
                    newArray.push("0" + (i+1))
                    }
                    if (i > 999 && i < 10000) {
                    newArray.push((i+1))
                    }
                }
        }
    
    
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