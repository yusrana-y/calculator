function cdisplay(num){
 display.innerHTML+=num
}

function clearAll(){
    display.innerHTML=''
}

function back(){
    display.innerHTML=display.innerHTML.slice(0,-1)
}

function equal(){
    try{
        display.innerHTML=eval(display.innerHTML)
    }
    
    catch{
        display.innerHTML='ERROR'
        setTimeout(()=>{
            display.innerHTML=""
        },1000)
    }
}