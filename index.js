function button(){
var getdata = document.getElementById("check").value
console.log(getdata)
var ul = document.querySelector("ul");
ul.innerHTML += `<div> <li> ${getdata} </li>
<button onclick="updateitem(this)>Update</button> 
<button onclick="deleteItem(this)">Delete</button> 
 </div>`;
var getdata = document.getElementById("check").value = ""
}
function deleteItem(getobject){
console.log(getobject)
getobject.parentElement.remove()
}
function updateitem(getobject){
    console.log(getobject)
    getobject.parentElement.childern[0].setAttribute('contentEditable' , 'true')
}