function erreur(){
    var pseudo = document.getElementById("pseudo");
    var email = document.getElementById("email");
    var mdp = document.getElementById("mdp");

    if(!pseudo.value || !email.value || !mdp.value){
        document.getElementById("erreur").innerHTML = "Veuillez remplir tous les champs.";
    } else{
        document.getElementById("erreur").innerHTML = "";
    }
}