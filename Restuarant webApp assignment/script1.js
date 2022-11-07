//menu-start
//alert('hi')

let nbtn=document.getElementById("nonvegbtn");
let vbtn=document.getElementById("vegbtn");
let sbtn=document.getElementById("saladbtn");
let shwnv=document.getElementById('nonVeg')
nbtn.addEventListener("click",function(e){
    if(document.getElementById('nonVeg').style.display=="none"){
    document.getElementById('nonVeg').style.display="block";
    document.getElementById('rembtn').style.display="block";
}
    else{
        document.getElementById('nonVeg').style.display="none"
        document.getElementById('rembtn').style.display="none";
    }
});

vbtn.addEventListener("click",function(e){
    if(document.getElementById('veg').style.display=="none"){
        document.getElementById('veg').style.display="block";
        document.getElementById('rembtn').style.display="block";
    }
    else{
        document.getElementById('veg').style.display="none"
        document.getElementById('rembtn').style.display="none";
    }});
 sbtn.addEventListener("click",function(e){
    if(document.getElementById('salads').style.display=="none"){
                document.getElementById('salads').style.display="block";
                document.getElementById('rembtn').style.display="block";
            }
            else{
                document.getElementById('salads').style.display="none";
                document.getElementById('rembtn').style.display="none";
            
}});


function removemenu(){
    document.getElementById('veg').style.display="none"
    document.getElementById('salads').style.display="none";
    document.getElementById('nonVeg').style.display="none"
    document.getElementById('rembtn').style.display="none"
}  
function overAlMenu(){
    document.getElementById('veg').style.display="block"
    document.getElementById('salads').style.display="block";
    document.getElementById('nonVeg').style.display="block"
    document.getElementById('rembtn').style.display="block"
}