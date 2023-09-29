var kerdesSzorsz =0;
var jovalasz=0
var rosszvalasz =0

var kerdesek =[
    {
        k:"Kutya vagy?",
        v1:"nem",
        v2:"igen",
        v3:"vau",
        v4:"miau",
        jo:v3
    },
    {
        k:"cica vagy?",
        v1:"nem",
        v2:"igen",
        v3:"vau",
        v4:"miau",
        jo:v3
    },
    {
        k:"fasszopocsabika vagy?",
        v1:"nem",
        v2:"nem, de ő az",
        v3:"CSABCSABACSIBICSABABABAB",
        v4:"n*ger",
        jo:v1
    },
    {
        k:"vagy?",
        v1:"nem",
        v2:"gondolkodom",
        v3:"fidesz",
        v4:"nemjézus",
        jo:v2
    },
    {
        k:"",
        v1:"",
        v2:"igen",
        v3:"vau",
        v4:"miau",
        jo:v1
    }
] 
function next(params) {




const btn = document.querySelector('#btn');        
const valaszok = document.querySelectorAll('input[name="valasz"]');
btn.addEventListener("click", () => {
    var valasztott;
    for (const v of valaszok) {
        if (v.checked) {
            valasztott = v.value;
            break;
        }
    }
})

ujkerdes()

}
function ujkerdes(params) {
    if (kerdesSzorsz==kerdesek.length) {
        vege()
    } else {
        kerdesSzorsz++
    const kerdesKi = document.getElementById("kerdes")
    const v1Ki = document.getElementById("v1ir")
    const v2Ki = document.getElementById("v2ir")
    const v3Ki = document.getElementById("v3ir")
    const v4Ki = document.getElementById("v4ir")
    kerdesKi.innerHTML=kerdesek[kerdesSzorsz].k
    v1Ki.innerHTML=kerdesek[kerdesSzorsz].v1
    v2Ki.innerHTML=kerdesek[kerdesSzorsz].v2
    v3Ki.innerHTML=kerdesek[kerdesSzorsz].v3
    v4Ki.innerHTML=kerdesek[kerdesSzorsz].v4
}
    }
function vege(params) {
    
}