let pika=document.getElementById('trovao')
let squi=document.getElementById('agua')
let bulb=document.getElementById('planta')
let char=document.getElementById('fogo')
let pika1=document.getElementById('trovao1')
let squi1=document.getElementById('agua1')
let bulb1=document.getElementById('planta1')
let char1=document.getElementById('fogo1')


pika.addEventListener('click', virar1)
squi.addEventListener('click', virar2)
bulb.addEventListener('click', virar3)
char.addEventListener('click', virar4)
pika1.addEventListener('click', virar5)
squi1.addEventListener('click', virar6)
bulb1.addEventListener('click', virar7)
char1.addEventListener('click', virar8)
var lastSelected=[0,0]
var tryagain=[0]
function virar1() {
    pika.setAttribute('src', 'pikachu.png')
    lastSelected.push("pika")
    tryagain.push(document.getElementById('trovao'))
    checarPar()
}
function virar2() {
    squi.setAttribute('src', 'squirtle.png')
    tryagain.push(document.getElementById('agua'))
    lastSelected.push("squi")
    checarPar()


}
function virar3() {
    bulb.setAttribute('src','bulbasaur.png')
    tryagain.push(document.getElementById('planta'))
    lastSelected.push("bulb")
    checarPar()
} 
function virar4() {
    char.setAttribute('src','charmander.png')
    tryagain.push(document.getElementById('fogo'))
    lastSelected.push("char")
   checarPar()

}
function virar5() {
    pika1.setAttribute('src', 'pikachu.png')  
    lastSelected.push("pika")
    tryagain.push(document.getElementById('trovao1'))
   checarPar()
}

function virar6() {
    squi1.setAttribute('src', 'squirtle.png')
    tryagain.push(document.getElementById('agua1'))
    lastSelected.push("squi")
    checarPar()
}
function virar7() {
    bulb1.setAttribute('src','bulbasaur.png')
    tryagain.push(document.getElementById('planta1'))
    lastSelected.push("bulb")
    checarPar()
} 


function virar8() {
    char1.setAttribute('src','charmander.png')
    lastSelected.push("char")
    tryagain.push(document.getElementById('fogo1'))
    checarPar()

}

function checarPar() {
    if (lastSelected[lastSelected.length - 2] == 0) {
        
    }else if (lastSelected[lastSelected.length-2] == lastSelected[lastSelected.length-1]) {
        window.alert('congrats')
        lastSelected.push(0)
        lastSelected.push(0)
        tryagain.push(0)
        tryagain.push(0)
        
    }else{ 
        tryagain[tryagain.length-1].src="pokebola.png"
        tryagain[tryagain.length-2].src="pokebola.png"
        lastSelected.push(0)
        lastSelected.push(0)
        tryagain.push(0)
        tryagain.push(0)
        
        

    }

    
}





