function validation() {

    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var adresse = document.getElementById("adresse").value;
    var ddn = document.getElementById("date").value;
    var mail = document.getElementById("mail").value;

    document.getElementById("error").innerHTML = "";

    if (nom.length < 5) {
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
        return false;
    }

    if (prenom.length < 5) {
        document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
        return false;
    }

    if (adresse.length < 5) {
        document.getElementById("error").innerHTML = "La saisie d'Adresse est obligatoire";
        return false;
    }

    if (mail.length < 5) {
        document.getElementById("error").innerHTML = "La saisie d'Email est obligatoire";
        return false;
    }

  /*  const dateNaissance = new Date(document.getElementById("date").value);
    if (dateNaissance.getTime() > Date.now()) {
        document.getElementById("Error").innerHTML =
            "La date de naissance ne peut pas etre dans le futur 🤷‍♀️";
        return false;
            if (document.getElementById("error").innerHTML == "") {
        return true;
    }
    } */

    document.getElementById("resultat").innerHTML ="Bienvenue " + nom;


}