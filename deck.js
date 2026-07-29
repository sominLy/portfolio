const slides=[...document.querySelectorAll('.slide')];
const current=document.querySelector('[data-current]');
const total=document.querySelector('[data-total]');
const progress=document.querySelector('.progress');
if(total) total.textContent=String(slides.length).padStart(2,'0');
slides.forEach((slide,index)=>{
  const number=slide.querySelector('.num');
  if(number) number.textContent=String(index+1).padStart(2,'0');
});
function activeIndex(){let best=0,dist=Infinity;slides.forEach((s,i)=>{const d=Math.abs(s.getBoundingClientRect().top);if(d<dist){dist=d;best=i}});return best}
function update(){const i=activeIndex();if(current)current.textContent=String(i+1).padStart(2,'0');if(progress)progress.style.width=((i+1)/slides.length*100)+'%'}
function move(delta){const i=Math.max(0,Math.min(slides.length-1,activeIndex()+delta));slides[i].scrollIntoView({behavior:'smooth'})}
document.querySelector('[data-prev]')?.addEventListener('click',()=>move(-1));
document.querySelector('[data-next]')?.addEventListener('click',()=>move(1));
addEventListener('keydown',e=>{if(['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();move(1)}if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();move(-1)}});
addEventListener('scroll',update,{passive:true});update();
