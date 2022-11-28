function palindrome() {
    const text = document.getElementById("text").value
    const smallText = text.toLowerCase().replace(/[\W_]/g, "")
    const reverseText = smallText.split("").reverse().join("")

    let answer1 = ""
    if (reverseText === smallText) answer1 = "✔ Es un palíndromo"
    else answer1 = "❌ No es un palíndromo"

    document.getElementById("answer1").innerHTML = text ? answer1 : ""
}

function numeroMayor() {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value


    let answer2 = ""
    if (parseInt(num1) > parseInt(num2)) answer2 = "Número mayor: " + num1
    else answer2 = "Número mayor: " + num2
    document.getElementById("answer2").innerHTML = text ? answer2 : ""
}

function vocalesEnFrase() {
    const oracion = document.getElementById("miFrase").value
    frase = oracion.toLowerCase()
    const n = frase.length

    answerA = " "
    answerE = " "
    answerI = " "
    answerO = " "
    answerU = " "

    for (let i = 0; i < n; i++) {
        if (frase.substr(i, 1) == "a"){
            answerA="a"
        }else if(frase.substr(i, 1) == "e"){
            answerE="e"
        }else if(frase.substr(i, 1) == "i"){
            answerI="i"
        }else if(frase.substr(i, 1) == "o"){
            answerO="o"
        }else if(frase.substr(i, 1) == "u"){
            answerU="u"
        }
    }

    document.getElementById("1answerA").innerHTML = text ? answerA : ""
    document.getElementById("1answerE").innerHTML = text ? answerE : ""
    document.getElementById("1answerI").innerHTML = text ? answerI : ""
    document.getElementById("1answerO").innerHTML = text ? answerO : ""
    document.getElementById("1answerU").innerHTML = text ? answerU : ""
}

function numVocales(){
    const oracion = document.getElementById("miFrase2").value
    frase = oracion.toLowerCase()
    const n = frase.length

    answerA = 0
    answerE = 0
    answerI = 0
    answerO = 0
    answerU = 0

    for (let i = 0; i < n; i++) {
        if (frase.substr(i, 1) == "a"){
           answerA = answerA + 1
        }else if(frase.substr(i, 1) == "e"){
           answerE = answerE + 1
        }else if(frase.substr(i, 1) == "i"){
           answerI = answerI + 1
        }else if(frase.substr(i, 1) == "o"){
           answerO = answerO + 1
        }else if(frase.substr(i, 1) == "u"){
            answerU = answerU + 1
        }
    }

    answerA = "a: "+ answerA
    answerE = "e: "+ answerE
    answerI = "i: "+ answerI
    answerO = "o: "+ answerO
    answerU = "u: "+ answerU

    document.getElementById("2answerA").innerHTML = text ? answerA : ""
    document.getElementById("2answerE").innerHTML = text ? answerE : ""
    document.getElementById("2answerI").innerHTML = text ? answerI : ""
    document.getElementById("2answerO").innerHTML = text ? answerO : ""
    document.getElementById("2answerU").innerHTML = text ? answerU : ""
}



// Función para ajax
/* (function(){
    var button = document.querySelector("button");
    var divContenedor = document.getElementById("html");

    button.addEventListener("click", obtenerHTML, true);

    function obtenerHTML(e){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.status == 200){
                divContenedor.innerHTML = xhr.responseText
            }
        }

        xhr.open("get","index.html",true);
        xhr.send();
    }
}) */