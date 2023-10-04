var kerdesSzorsz =-1;
var jovalasz=0
var rosszvalasz =0
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  
  
var kerdesek =[
    {
        k:"Kutya vagy?",
        v1:"nem",
        v2:"igen",
        v3:"vau",
        v4:"miau",
        jo:"v3"
    },
    {
        k:"cica vagy?",
        v1:"nem",
        v2:"igen",
        v3:"vau",
        v4:"miau",
        jo:"v4"
    },
    {
        k:"fasszopocsabika vagy?",
        v1:"nem",
        v2:"nem, de ő az",
        v3:"CSABCSABACSIBICSABABABAB",
        v4:"n*ger",
        jo:"v2"
    },
    {
        k:"vagy?",
        v1:"nem",
        v2:"gondolkodom",
        v3:"fidesz",
        v4:"nemjézus",
        jo:"v2"
    },
    {
        k:"Folytasd a dalszöveget: Nem tudom a neved",
        v1:"ÁÁÁHÁHÁHHHÁÁ",
        v2:"Ajjajjaj",
        v3:"Csak hallgatom mit ugat a mély",
        v4:"Minden városka lakatlan",
        jo:"v3"
    }
] 
function next(params) {



const btn = document.querySelector('#btn');        
const valaszok = document.querySelectorAll('input[name="valasz"]');

    var valasztott;
    for (let v of valaszok) {
        if (v.checked) {
            valasztott = v.value;
            console.log("tied"+valasztott);
            break;
        }
    }
    console.log("jovalasz:"+kerdesek[kerdesSzorsz].jo);
    if (valasztott==kerdesek[kerdesSzorsz].jo) {
        jovalasz++
        document.getElementById("test").style="background-color:green; "
        sleep(800).then(() => { document.getElementById("test").style="background-color:white; " });

    } else {
        rosszvalasz++
        document.getElementById("test").style="background-color:red; "
        sleep(800).then(() => { document.getElementById("test").style="background-color:white; " });

    }


ujkerdes()

}


function ujkerdes(params) {
    if (kerdesSzorsz==kerdesek.length-1) {
        vege()
    } else {
        kerdesSzorsz++
        console.log(kerdesek[kerdesSzorsz].k);
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
    document.getElementById("test").innerHTML= "Helyes válasz: "+jovalasz
}