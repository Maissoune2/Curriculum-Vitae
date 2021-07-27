let english = document.getElementById("en");
let français = document.getElementById("fr");

let exp = document.getElementById("exp");
let p1 = document.getElementById("p1");
let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");

let p2 = document.getElementById("p2");
let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");


english.onclick = () => {
    setLanguage("english");
//when we click on english button , it will diplay the english translation
}
français.onclick = () => {
    setLanguage("français");
//when we click on français button , it will diplay the french translation
    
}


function setLanguage(getLang){
    if (getLang === "english") {
        exp.innerHTML = "My Experience";
        p1.innerHTML = "Experience:";
        l1.innerHTML = 'Engineer and study manager, research & development in computer science.';
        l2.innerHTML = 'Smartphone / tablet application developer.';
        l3.innerHTML = 'WebDesigner.';
        l4.innerHTML = 'Technical web project manager';
    
        p2.innerHTML = "Companies:";
        li1.innerHTML += "";
        li2.innerHTML += "";
        li3.innerHTML = "National IT Systems Company";
        li4.innerHTML = "SADEEM Informatique-web agency";
    
    }  else if (getLang === "français"){
    
        exp.innerHTML = "Mon Expérience";
        p1.innerHTML = "Expérience:";
        l1.innerHTML = "Ingénieur et cadre d'études, recherche & développement en informatique.";
        l2.innerHTML = "Développeur d'applications smartphone/tablette.";
        l3.innerHTML = 'WebDesigner.';
        l4.innerHTML = 'Chef de projet web technique';
    
        p2.innerHTML += "";
        li1.innerHTML += "";
        li2.innerHTML += "";
        li3.innerHTML += "";
        li4.innerHTML += "";
    }
    }