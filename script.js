const body=document.body;
const themeBtn=document.getElementById("themeBtn");
const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");

if(localStorage.getItem("theme")==="light") body.classList.add("light");
themeBtn.addEventListener("click",()=>{
  body.classList.toggle("light");
  localStorage.setItem("theme",body.classList.contains("light")?"light":"dark");
});
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  document.getElementById("progress").style.width=(window.scrollY/h*100)+"%";
});
document.getElementById("year").textContent=new Date().getFullYear();
