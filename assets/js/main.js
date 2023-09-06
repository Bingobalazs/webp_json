let emberek =[]
function send(params) {
    let name = document.getElementById("name").value;
    let CommText= document.getElementById("comment").value;
    let kor = document.getElementById("kor").value;



    let ember=
    {
        nev:name,
        eletkor:kor,
        komment:CommText
    };
    

    emberek.push(ember);
    kirajzol();
}
function kirajzol(params) {
    let mezo= document.getElementById("comms");
    emberek.forEach(element => {
        mezo.innerHTML+="<tr><td>"+element.nev+"</td><td>"+element.eletkor+"</td><td>"+element.komment+"</td></tr>";
    });
    
}