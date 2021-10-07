function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


function changeImage() {
var image = document.getElementById("imgAbout");
var imageSrc = image.getAttribute("src");

if (imageSrc == "img/profile.jpg") {
   image.setAttribute("src", "img/profile2.jpg")
   
}
else if (imageSrc == "img/profile2.jpg") {
   image.setAttribute("src", "img/profile3.jpg")
   
}

else if (imageSrc == "img/profile3.jpg") {
   image.setAttribute("src", "img/profile4.jpg")
   
}

else {
   image.setAttribute("src", "img/profile.jpg")
}

}