//document.body.style.backgroundColor = "red";
document.getElementById("about").style.backgroundColor = "blue";
document.getElementsByTagName("body")[0].style.fontFamily = "sans-serif";

//Iterate through each li and change the class to "listitem"
var li = document.getElementsByTagName("li");
var i;
for (i = 0; i < li.length; i++) {
  li[i].classList.add('listitem');
}

//Add a style tag that sets a rule for "listitem" to make the color red
var style = document.createElement("style");
var t = document.createTextNode(".listitem {background-color: red}");  
style.appendChild(t);
document.getElementsByTagName("body")[0].appendChild(style);

//Create a new img element and set its src attribute to a picture of you
var img = document.createElement("img");
img.setAttribute("src","https://secure.gravatar.com/userimage/53515936/6fdc0840d753a9e722c1a807381cb4da?size=250");

//Append that element to the page
document.getElementsByTagName("body")[0].appendChild(img);
