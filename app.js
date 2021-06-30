var input=document.getElementById("input");
console.log(input.value);
var btn=document.getElementById("btn");
var img=document.getElementById("img");

function show(){
    if(input.value=="M.S Dhoni")
    img.src="ms.jpg";
    else if (input.value=="Rishabh Pant")
    img.src="rp.jpg";
    else if (input.value=="Rohit Sharma")
    img.src="rs.jpg";
    else if (input.value=="Virat Kohli")
    img.src="vk.jpg";

    else
        alert("choose beetween M.S Dhoni Virat Kohli Rishabh Pant Rohit Sharma: ")
}