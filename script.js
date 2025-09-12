const modal=document.getElementById("contactModal");
const btn=document.getElementById("contactBtn");

const span=document.getElementsByClassName("close")[0];

btn.onclick=function(){
    modal.style.display="block";
}

span.onclick=function(){
    modal.style.display="none";
}
window.onclick=function(e){
    if(e.target==modal){
        modal.style.display="none";
    }}

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

