document.getElementById("year")?.append(new Date().getFullYear());

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",()=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target) target.scrollIntoView({behavior:"smooth"});
  });
});
