let english = document.getElementById("en");
let français = document.getElementById("fr");


let cmpt = document.getElementById("cmpt");

let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");
let li5 = document.getElementById("li4");

english.onclick = () => {
    setLanguage("english");
    
}
français.onclick = () => {
    setLanguage("français");

}

function setLanguage(getLang){
    if (getLang === "english") {
        cmpt.innerHTML = "My Skilles";
    li1.innerHTML = "IT project management.";
    li2.innerHTML = "Engineer in virtual and augmented reality and video games.";
    li3.innerHTML = "Mobile and web application development engineer.";
    li4.innerHTML = "Infrastructure and networks.";
    li5.innerHTML = "Engineer of embedded digital systems and connected objects.";
    } else if (getLang === "français") {
        li1.innerHTML = "Gestion de projet informatique.";
        li2.innerHTML = "Ingénieur de la réalité virtuelle,augmentée et jeux vidéo.";
        li3.innerHTML = "Ingénieur du développement d'application mobile et web.";
        li4.innerHTML = "Infrastructure et réseaux.";
        li5.innerHTML = "Ingénieur des systèmes numériques embarqué et objets connectés.";
        cmpt.innerHTML = "Mes Compétences";
    }
}