let bar = document.querySelector("#bar");
let list = document.querySelector(".list");

bar.addEventListener("click",()=>{
  if(list.style.top == "-450px"){
    list.style.top = "0px";
    bar.classList.add("fa-xmark");
    bar.classList.remove("fa-bars");
    bar.style.color = "#000";
  }else{
  list.style.top = "-450px";
  bar.classList.add("fa-bars");
  bar.classList.remove("fa-xmark");
  bar.style.color = "#fee715";
  }
})