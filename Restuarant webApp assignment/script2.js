//test

let btn=document.getElementById('btn')
btn.addEventListener("click",()=> {
    let name = document.getElementById("name");
    let email = document.getElementById("dt1");
    let nop = document.getElementById("Nop");
    let mob = document.getElementById("mob");
    let slot=document.getElementById("slot");
      if (name.value == "" || email.value == "" ||
      mob.value == ""||nop.value == "" ||slot.value=="") {
          return alert("Please add All Details")
      }
alert(slot.value)
      //let con=confirm("Do you want to confirm the booking")
   //  if(con){
      let resv = localStorage.getItem("resv");
  if (resv == null) {
    resObj = [];
  } else {
    resObj = JSON.parse(resv);
    //alert('before update ')
  }
  //test-start
  console.log(resObj)

  let result={},arr=[]
let bool=true;
Object.entries(resObj).forEach(([key, val]) => {
   result[val.dat+val.Slot]?result[val.dat+val.Slot]++:result[val.dat+val.Slot]=1
  });
  console.log(result)
  Object.entries(result).forEach(([key, val]) => {
if(val>2 && key==email.value+slot.value){
    arr.push(val)
    bool=false
   // console.log(bool)
   alert("slots are full and add for another day")
   
}
   });
  //console.log(arr)
  if(!bool){
return
  }

  
//test-end
let con=confirm("Do you want to confirm the booking")
if(con && bool){
  let myObj = {
    title: name.value,
    No:nop.value,
    dat:email.value,
    Mob:mob.value,
    Slot:slot.value
    //date:date()
  }
  resObj.push(myObj);
  localStorage.setItem("resv", JSON.stringify(resObj));
  name.value = ""
  email.value = ""
  mob.value = ""
  nop.value = ""
  updateLs()
}    })


function updateLs(){
      let resv = localStorage.getItem("resv");
      if (resv == null) {
        resObj = [];
      } else {
        resObj = JSON.parse(resv);
       //alert(resObj)
      }
      let tableBody = document.getElementById("tableBody");
            let str = "";
            resObj.forEach((element, index) => {
                str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element.title}</td>
                    <td>${element.No}</td>  
                    <td>${element.Mob}</td>  
                    <td>${element.dat}</td> 
                    <td>${element.Slot}</td>  
                    </tr>`;
            });
           //console.log(str)
           document.getElementById('tabhead').style.display="block"
  if (resObj.length != 0) {
    tableBody.innerHTML = str;
  } else {
    tableBody.innerHTML = `No Notes Yet! Add a note using the form above.`;
  }
}
updateLs()
function res(){
    if(document.getElementById('show').style.display=="none"){
        document.getElementById('show').style.display="block"
    }else{
        document.getElementById('show').style.display="none"
    }

}
function overAlMenu(){
  if(document.getElementById('veg').style.display=="none" || document.getElementById('salads').style.display=="none" || document.getElementById('nonVeg').style.display=="none" 
  || document.getElementById('rembtn').style.display=="none"){
  document.getElementById('veg').style.display="block"
  document.getElementById('salads').style.display="block";
  document.getElementById('nonVeg').style.display="block"
  document.getElementById('rembtn').style.display="block"
}
else{
  document.getElementById('veg').style.display="none"
  document.getElementById('salads').style.display="none" 
  document.getElementById('nonVeg').style.display="none" 
  document.getElementById('rembtn').style.display="none"

}
}