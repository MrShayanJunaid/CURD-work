function button(){
var getdata = document.getElementById("check").value
console.log(getdata)
var ul = document.querySelector("ul");
ul.innerHTML += `<li> ${getdata} 
<button>Update</button> 
<button onclick="deleteItem(this)">Delete</button> 
</li>`;
var getdata = document.getElementById("check").value = ""
}
function deleteItem(getobject){
console.log(getobject)
getobject.parentElement.remove()
}