let emberek =[]
function send(params) {
    let name = document.getElementById("name").value;
    let CommText= document.getElementById("comment").innerHTML;
    let kor = document.getElementById("kor").value;



    let ember=
    {
        nev:name,
        eletkor:kor,
        komment:CommText
    }
    

    emberek.push(ember)
}