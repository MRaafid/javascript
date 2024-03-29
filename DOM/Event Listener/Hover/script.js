let a = document.querySelector("p");
a.addEventListener("mouseover", function (){a.style.backgroundColor ="red"});
// mouseover is equavelent of hover
a.addEventListener("mouseout", function (){a.style.backgroundColor ="transparent"});
// when move is removed, if this is not added the colout will not change back