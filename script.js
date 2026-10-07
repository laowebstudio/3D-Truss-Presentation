const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.12});
revealEls.forEach(el=>observer.observe(el));

const buttons = document.querySelectorAll('.code-nav button');
const panels = document.querySelectorAll('.code-panel');
buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    panels.forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

window.addEventListener('scroll',()=>{
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const pct = max ? (doc.scrollTop / max)*100 : 0;
  document.getElementById('progress').style.width = pct + '%';
});
