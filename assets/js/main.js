let osztalyadat=document.getElementById("osztalyadat")
let tanulo=document.getElementById("tanulo")
let lista=document.getElementById("listanez")
let osztalynev=document.getElementById("osztalynev")
let ofonev=document.getElementById("ofonev")
let tannev=document.getElementById("tannev")
let tanlak=document.getElementById("tanlak")
let osztalyok=[];

function tagok(params) {
  console.log("tagok f");
  osztalyadat.style="display:none;"
  lista.style="display:none;"
  tanulo.style="display:block;"

  osztalyok.push({
    ofo:ofonev.value,
    osztaly:osztalynev.value,
    tagok:[]
    
  })
}
function mentes(params) {
osztalyok[osztalyok.length-1].tagok.push(
  {nev: tannev.value, lakohely:tanlak.value})
tannev.focus()
}
function osztaly(params) {
  osztalyadat.style="display:block;"
  lista.style="display:none;"
  tanulo.style="display:none;"
}
function listaz(params) {
  
  osztalyadat.style="display:none;"
  lista.style="display:block;"
  tanulo.style="display:none;"
  osztalyok.forEach(element => {
    lista.innerHTML += "<table><thead><th> Osztáyl: "+element.osztaly+"</th>  <th>Osztályfőnök: "+element.ofo+"</th></thead>";
    let szamlalo =1;
    element.tagok.forEach(tag => {
      lista.innerHTML+= "<tr><td>"+szamlalo+". "+tag.nev+"</td><td> "+tag.lakohely+"</td></tr>"
      szamlalo++;
    });
  lista.innerHTML+="</table>"
  });
}