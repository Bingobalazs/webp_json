var szovegek = [
    {
        szoveg:"Már nem is számolja hány bájtos mosolyú lány hitte el annak a képnek",
        atlag:100,
        rekord:100,
        rekorder:"Senki"
    },
    {
        szoveg:"Tudom szeretet nélkül minden ház üres, minen városka lakatlan",
        atlag:100,
        rekord:100,
        rekorder:"Senki"
    },
    {
        szoveg:"Egy levelet felkapott a vihar",
        atlag:100,
        rekord:100,
        rekorder:"Senki"
    },
    {
        szoveg:"Mondd, hol van az a krézi srác?",
        atlag:100,
        rekord:100,
        rekorder:"Senki"
    },
    {
        szoveg:"Tavasz volt vagy ősz vagy tél vagy nyár; nem emlékszem már",
        atlag:100,
        rekord:100,
        rekorder:"Senki"
    },{
        szoveg:"Valaki jár a fák hegyén; gyújtja, s oltja csillagot",
        atlag:100,
        rekord:100,
        rekorder:"Senki"
    }

]
var randomSzoveg; var ido = 0;
function loader(params) {
    document.getElementById("complete").style="display:none;"
    randomSzoveg = szovegek[Math.floor(Math.random() * szovegek.length)];
    document.getElementById("text").innerHTML=randomSzoveg.szoveg
    document.getElementById("inp").value=""
    document.getElementById("inp").focus()
}
document.getElementById("inp").addEventListener("input", ()=>
{
if (document.getElementById("inp").value.length<2) {
    TypeStart()
}
});

function TypeStart(params) {
   
    var idozito = setInterval(() => {
        ido++;
        document.getElementById("timer").innerHTML=(ido/10)+" mp"
       document.getElementById("cpm").innerHTML=(document.getElementById("inp").value.length/(ido/10))+"cpm"
       document.getElementById("range").value=(document.getElementById("inp").value.length/(ido/10))
        if (document.getElementById("inp").value==randomSzoveg.szoveg) {
            clearInterval(idozito)
            siker()
        }
    }, 100);
}
function siker(params) {
    document.getElementById("complete").style="display:block;"
    
   if (ido<randomSzoveg.rekord) {
    document.getElementById("ujrek").innerHTML="ÚJ REKORD!!!"
    document.getElementById("rekordsz").innerHTML="Előző rekord: "+randomSzoveg.rekord
    document.getElementById("rekordn").innerHTML="Előző rekord tartó: "+randomSzoveg.rekorder
    randomSzoveg.rekorder=document.getElementById("nev").value
    randomSzoveg.rekord=ido
    console.log("ujrek");
    
   }else{
    document.getElementById("rekordsz").innerHTML="Rekord: "+randomSzoveg.rekord
    document.getElementById("rekordn").innerHTML="Rekord tartó: "+randomSzoveg.rekorder
   }
}