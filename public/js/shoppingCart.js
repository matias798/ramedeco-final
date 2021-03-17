window.onload=function(){
function changeValue(elementName,value, operator){
    let htmlElement= getElement(elementName)
    console.log("[changeValue]",htmlElement)
    if(htmlElement){
        if(operator === '+'){
            console.log("[changeValue]",htmlElement,"+")
            htmlElement.value= parseFloat(htmlElement.value) +value
        }else{
            if(parseFloat(htmlElement.value)>1){
                console.log("[changeValue]",htmlElement,"-")
                htmlElement.value = parseFloat(htmlElement.value) -value 
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


const TOTAL_PURCHASE="total_purchase"

let decrementElements=document.querySelectorAll(".decI")
let incrementElements=document.querySelectorAll(".incI")

decrementElements.forEach(element=> {
    console.log(element)
    element.addEventListener("click",(event)=>{

        let id=element.id
        id=id.slice(0,id.indexOf('_')+1)
        let elementPrice=getElement(id + "product_price")
        let value=elementPrice.value
        value=parseFloat(value)
        changeValue(TOTAL_PURCHASE,value,"-")
        changeValue(id+"amount",1,"-")
        changeValue(id+"product_subtotal",value,"-")
    })
})

incrementElements.forEach(element=> {
    console.log(element)
    element.addEventListener("click",(event)=>{
        let id=element.id
        id=id.slice(0,id.indexOf('_')+1)
        let elementPrice=getElement(id + "product_price")
        let value=elementPrice.value
        value=parseFloat(value)
        changeValue(TOTAL_PURCHASE,value,"+")
        changeValue(id+"amount",1,"+")
        changeValue(id+"product_subtotal",value,"+")
    })
})
}