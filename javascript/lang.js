let english = document.getElementById("en");
let français = document.getElementById("fr");

//get the elments by id
let titre = document.getElementById("titre");
let sous_titre = document.getElementById("sous-titre");

let exp = document.getElementById("exp");
let p1 = document.getElementById("p1");
let a1 = document.getElementById("a1");

let comp = document.getElementById("comp");
let p2 = document.getElementById("p2");
let a2 = document.getElementById("a2");

let form = document.getElementById("form");
let p3 = document.getElementById("p3");
let a3 = document.getElementById("a3");

let lang = document.getElementById("lang");
let ctr = document.getElementById("ctr");

let arb = document.getElementById("arb");
let frc = document.getElementById("frc");
let eng = document.getElementById("eng");

let voy = document.getElementById("voy");
let stp = document.getElementById("spt");
let ltc = document.getElementById("ltc");


english.onclick = () => {
    setLanguage("english");

}
français.onclick = () => {
    setLanguage("français");
}

//translate texts using this function
function setLanguage(getLang){
if (getLang === "english") {
    //traduction anglais
    titre.innerHTML = "Curriculum Vitae";
    sous_titre.innerHTML = "Don't be a Programmer, Be a Problem Solver";

    exp.innerHTML = "My Experience :";
    p1.innerHTML = "For more details about my experience,";
    a1.innerHTML = "Click Here";

    comp.innerHTML = "My skills :";
    p2.innerHTML = "For more details about my skills,";
    a2.innerHTML = "Click Here";

    form.innerHTML = "My Formation :";
    p3.innerHTML = "For more details about my formation,";
    a3.innerHTML = "Click Here";

    lang.innerHTML = "The Languages :";
    ctr.innerHTML = "The Centers of Interest:";

    arb.innerHTML = "Arabic: " + '&nbsp;&nbsp;&nbsp;<meter min="0" max="100" value="90" low="50" high="70" optimum="90"></meter>';
    frc.innerHTML = "French: " + '&nbsp;&nbsp;<meter min="0" max="100" value="60" low="50" high="70" optimum="90"></meter>';
    eng.innerHTML = "English: " + '&nbsp;<meter min="0" max="100" value="40" low="50" high="70" optimum="90"></meter>';

    voy.innerHTML = "Travel: Asia (China, Japan) and other (USA, Turkey, Australia, England).";
    stp.innerHTML = "Sport: Volleyball, Basketball, Swimming.";
    ltc.innerHTML = "Reading: French / Arabic novels.";


}  else if (getLang === "français") {
    //traduction français
    titre.innerHTML = "Curriculum Vitae";
    sous_titre.innerHTML = "Ne soyez pas un programmeur, soyez un résolveur de problèmes";

    exp.innerHTML = "Mon Experience :";
    p1.innerHTML = "Pour des détails sur mon experience ,";
    a1.innerHTML = "Cliquer Ici";

    comp.innerHTML = "Mes Compétences :";
    p2.innerHTML = "Pour des détails sur mes compétences ,";
    a2.innerHTML = "Cliquer Ici";

    form.innerHTML = "Ma Formation :";
    p3.innerHTML = "Pour des détails sur ma formation ,";
    a3.innerHTML = "Cliquer Ici";

    lang.innerHTML = "Les Langues";
    ctr.innerHTML = "Les centres d'intéret :";

    arb.innerHTML = "Arabe: " + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<meter min="0" max="100" value="90" low="50" high="70" optimum="90"></meter>';
    frc.innerHTML = "Français: " + '<meter min="0" max="100" value="60" low="50" high="70" optimum="90"></meter>';
    eng.innerHTML = "Anglais: " + '&nbsp;&nbsp;<meter min="0" max="100" value="40" low="50" high="70" optimum="90"></meter>';

    voy.innerHTML = "Voyage: Asie(Chine,Japan) et autre(USA, Turquie, Australie, Angleterre).";
    stp.innerHTML = "Sport: Volley-ball, Basket-ball, Natation.";
    ltc.innerHTML = "Lecture: Romans français/arabe.";

}
}