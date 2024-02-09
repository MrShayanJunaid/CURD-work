let count=0;
function increase(){

document.getElementById("number").innerHTML=count++;
}
function decrease(){
    if(count==0){
        count=0;
        document.getElementById("number").innerHTML=count;
    }
    else{
        document.getElementById("number").innerHTML=count=count-1;
    }
}