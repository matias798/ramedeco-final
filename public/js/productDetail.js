window.onload=function(){
function changeValue(elementName,value, operator){
    let htmlElement= getElement(elementName)
    console.log("[changeValue]",htmlElement)
    if(htmlElement){
        if(operator === '+'){
            console.log("[changeValue]",htmlElement," in plus sentence +")
            htmlElement.innerHTML= parseFloat(htmlElement.innerHTML) +value
        }else{
            if(parseFloat(htmlElement.innerHTML)>1){
                console.log("[changeValue]",htmlElement,"-")
                htmlElement.innerHTML = parseFloat(htmlElement.innerHTML) -value 
            }
        }
    }
}
function changeValueInput(elementName,value, operator){
    let htmlElement= getElement(elementName)
    console.log("[changeValue]",htmlElement)
    if(htmlElement){
        if(operator === '+'){
            console.log("[changeValue]",htmlElement," in plus sentence +")
            htmlElement.value= parseFloat(htmlElement.value) +value
        }else{
            if(parseFloat(htmlElement.value)>1){
                console.log("[changeValue]",htmlElement,"-")
                htmlElement.value = parseFloat(htmlElement.value) - value 
            }
        }
    }
}
function getElement(elementName){   
    let htmlElement= document.getElementById(elementName);
    if(!htmlElement){
        htmlElement = document.querySelector(elementName)
    }
    return htmlElement;
}


const TOTAL="total"

let decrementElements=document.querySelector(".bajar-cantidad")
let incrementElements=document.querySelector(".aumentar-cantidad")

decrementElements.addEventListener("click",(event)=>{
    let elementPrice=getElement("precio")
    let value=parseFloat(elementPrice.innerHTML)
    console.log("addEventListener: el value es ","value",value)
    changeValue(TOTAL,value,"-")
    changeValueInput("display",1,"-")
    })


incrementElements.addEventListener("click",(event)=>{
    let elementPrice=getElement("precio")
    let value=parseFloat(elementPrice.innerHTML)
    console.log("addEventListener: el value es ","value",value)
    changeValue(TOTAL,value,"+")
    changeValueInput("display",1,"+")
})
}