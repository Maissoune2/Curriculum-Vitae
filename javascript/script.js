let img = document.getElementById("img");  //get the img element and assign it to a variable

img.addEventListener("mouseenter" , function(event){  //use addeventlistiner to make actions when the mouse is over the img
    //when the mouse is over the img 
    //its height and width will be 125px > 115px

    event.target.style.width = "125px";
    event.target.style.height = "125px";

    //after 500ms , the img's height and width will be 115px
    setTimeout(function(){

        event.target.style.width = "115px";
        event.target.style.height = "115px";
        
    },500)
},false);
