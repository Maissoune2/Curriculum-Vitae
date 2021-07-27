let english = document.getElementById("en");
let français = document.getElementById("fr");

let form = document.getElementById("form");
let p1 = document.getElementById("p1");

let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");
let li5 = document.getElementById("li5");
let li6 = document.getElementById("li6");
let li7 = document.getElementById("li7");

english.onclick = () => {
    setLanguage("english");
    
}
français.onclick = () => {
    setLanguage("français");

}


function setLanguage(getLang){
    if (getLang === "english") {
        form.innerHTML ="My Formation";
        p1.innerHTML = "School Path:";
        li1.innerHTML ="<span>2007-2012 : </span>Primary Rabah Bissas.";
        li2.innerHTML ="<span> 2012 : </span>Primary education certificate";
        li3.innerHTML ="<span>2012-2016 : </span>Middle school IBn KHaldoune.";
        li4.innerHTML ="<span>2016 : </span>Middle school certificate";
        li5.innerHTML ="<span>2016-2019 : </span>Lycée Mohamed l'aid El Khalifa.";
        li6.innerHTML ="<span>2019 : </span>Bachelor of Science.";
        li7.innerHTML ="<span>2019  to now : </span>M'hamed Bougara University, Faculty of Science.";





    } else if (getLang === "français") {
        form.innerHTML = "Ma Formation";
        p1.innerHTML = "Parcours Scolaire:";

        li1.innerHTML ="<span>2007-2012 : </span>Primaire Rabah Bissas.";
        li2.innerHTML ="<span> 2012 : </span>Certificat d'études primaires";
        li3.innerHTML ="<span>2012-2016 : </span>CEM IBn KHaldoune.";
        li4.innerHTML ="<span>2016 : </span>Certificat d'études Moyen.";
        li5.innerHTML ="<span>2016-2019 : </span>Lycee Mohamed l'aid El Khalifa.";
        li6.innerHTML ="<span>2019 : </span>Baccalauréat en sciences.";
        li7.innerHTML ="<span>2019 jusqu'à présent : </span>Université M'hamed Bougara , Faculté des sciences.";
    }
}