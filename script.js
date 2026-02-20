// Intro transition
setTimeout(()=>{
document.getElementById("intro").style.display="none";
document.getElementById("main").style.display="block";
},2000);

// Typing About
const text="Mechanical Engineering student passionate about Mechanical Design and Engineering Problem Solving.";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,30);
}
}
typing();

// Panel Open
function openPanel(id){
document.querySelectorAll(".panel").forEach(p=>p.style.display="none");
document.getElementById(id).style.display="block";
}

// Scroll Progress
window.addEventListener("scroll",()=>{
let winScroll=document.body.scrollTop || document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.getElementById("progressBar").style.width=(winScroll/height)*100+"%";
});

// Cursor Glow
document.addEventListener("mousemove",e=>{
let glow=document.createElement("div");
glow.style.position="fixed";
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
glow.style.width="6px";
glow.style.height="6px";
glow.style.borderRadius="50%";
glow.style.background="#ff2a6d";
glow.style.pointerEvents="none";
glow.style.opacity="0.7";
glow.style.transition="0.5s";
document.body.appendChild(glow);
setTimeout(()=>glow.remove(),500);
});
