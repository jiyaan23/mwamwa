let images = [
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg"
];

let i = 0;

function changePhoto(){

i++;

if(i >= images.length){
i = 0;
}

document.getElementById("photo").src = images[i];

}

setInterval(changePhoto,2500);