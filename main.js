function myFunction() {
  var dot = document.getElementById("dot");
  var mores = document.getElementById("more");
  var btn = document.getElementById("myBtn");
  
  if(dot.style.display == "none") {
    dot.style.display == "inline";
    btn.innerHTML == "Read More";
    mores.style.display == "none";
  } else {
    dot.style.display == "none";
    btn.innerHTML == "Read Less";
    mores.style.display == "inline";
  }
}