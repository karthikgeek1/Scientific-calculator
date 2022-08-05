let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn)=>btn.addEventListener('click', (event)=>{
    let key=event.target.innerText;
    if(key=='c'){
        display.innerText="";
    }
    else if(key=='DEL'){
        display.innerText=display.innerText.slice(0,-1);
    }
    else if(key=="="){
        display.innerText = eval(display.innerText);
    }
    else if(key=="√"){
        display.innerText=Math.sqrt(display.innerText)
    }
    else if(key=="x2"){
        display.innerText=Math.pow(display.innerText, 2)
    }
    else if(key=="x!"){
        display.innerText= function fact(){
            let factorial=1;
            for(let i=1; i<=display.innerText; i++){
                factorial=factorial*i 
            }
            return factorial
        }
        console.log(fact())
    }
    else if(key=='sin'){
        display.innerText = Math.sin(display.innerText)
    }
    else if(key=='cos'){
        display.innerText = Math.cos(display.innerText)
    }
    else if(key=='tan'){
        display.innerText = Math.tan(display.innerText)
    }
    else if(key=='±'){
        if(display.innerText>0){
            display.innerText=display.innerText-2*display.innerText
        }
        else{
            display.innerText=Math.abs(display.innerText)
        }
    }
    else if(key=='1/x'){
        display.innerText=1/display.innerText
    }
    else if(key=='pi'){
        display.innerText+=3.14
    }
    else if(key=='log'){
        display.innerText=Math.log(display.innerText)
    }
    else if(key=='e'){
        display.innerText=Math.exp(display.innerText)
    }
    else if(key=='x^'){
        let first=display.innerText%10
        let second=Math.floor(display.innerText/10)
        display.innerText=Math.pow(second, first)
    }
    else if(key=='rad'){
        display.innerText=(display.innerText)*3.14/180
    }
    else{
        display.innerText+=key
    }
}))