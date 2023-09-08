function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log("cooki bent");
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


function send(){
    setCookie("nev",document.getElementById("name").value, 10);
    setCookie("kor",document.getElementById("kor").value, 10);
    load();
    console.log("kuldve");
}
function load(params) {
    document.getElementById("udv").innerHTML="Szia, "+getCookie("nev")+"! Boldog "+getCookie("kor")+". születésnapot";
    console.log("töltve");
}