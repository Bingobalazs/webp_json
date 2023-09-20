
let autok =[]
function tarol(params) {
    let rsz=document.getElementById("rszinp").value
let uz=document.getElementById("uzemanyaginp").value
let elsot=document.getElementById("elsotinp").checked
let haroma=document.getElementById("3ajto").checked
let ota=document.getElementById("5ajto").checked
if (haroma){
    ajtok= 3
}else if (ota) {
    ajtok= 5   
}
autok.push(
        {
            rszam:rsz, 
            uzemanyag:uz, 
            elsotulaj:elsot,
            ajtokszama:ajtok
})


}
function stat(params) {
    let nepsz="Nem dönthető el"
    let benz=0
    let diz = 0
    let ele =0
    let regi = 0
    let uj=0
    let elso =0
    let osszkocsi=autok.length
    let rtag=[]
    let ajot=0
    let harom=0
    

    autok.forEach(element => {
        if (element.uzemanyag=="benzin") {
            benz++
        } else if(element.uzemanyag=="dizel") {
            diz++
        } else
        {
            ele++
        }
    });

    autok.forEach(element => {
        if (element.elsotulaj) {
            elso++
        }
        
    });
    autok.forEach(element => {
       rtag= element.rszam.split('-')
       if (rtag[0].length==3) {
           regi++
       }else uj++
    });
    autok.forEach(element => {
        if (element.ajtokszama==3) {
            harom++
        } else {
           ajot++
        }
    });


    document.getElementById("statBenzin").innerHTML=benz
    document.getElementById("statDizel").innerHTML=diz
    document.getElementById("statElekt").innerHTML=ele
    document.getElementById("statTulaj").innerHTML=(elso/osszkocsi)*100+"%"
    document.getElementById("statRegi").innerHTML=regi
    document.getElementById("statUj").innerHTML=uj
    if (ajot>harom) {
        nepsz="5 ajtós"
    }
    else if (ajot<harom) {
        nepsz="3 ajtós"
    }


    document.getElementById("statNepszer").innerHTML=nepsz
}