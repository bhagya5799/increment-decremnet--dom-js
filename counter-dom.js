let counterElement=document.getElementById("countervalue")
// console.log(counterElement)

function onincreament(){
    let previouscountervalue=counterElement.textContent;
    let updatedCounterValue=parseInt(previouscountervalue)+1
    counterElement.textContent=updatedCounterValue
    // counterElement.style.color="green"
     
    if (updatedCounterValue>0){
        counterElement.style.color="green"
    }
    else if(updatedCounterValue<0){
        counterElement.style.color="red"

    }
    else{
        counterElement.style.color="black"
    }
   

}


function ondecreament(){
    let previouscountervalue=counterElement.textContent;
    let updatedCounterValue=parseInt(previouscountervalue)-1
    counterElement.textContent=updatedCounterValue

    // counterElement.style.color="red"
    if (updatedCounterValue>1){
        counterElement.style.color="green"
    }
    else if(updatedCounterValue<0){
        counterElement.style.color="red"

    }
    else{
        counterElement.style.color="black"
    }
    
    
 
    

}

function onset() {
    let updatedCounterValue=0;
    counterElement.textContent=updatedCounterValue
    counterElement.style.color="black"


}