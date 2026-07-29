const slides=[...document.querySelectorAll('.slide')];
const current=document.querySelector('[data-current]');
const total=document.querySelector('[data-total]');
const progress=document.querySelector('.progress');
const artifactSets=[
  {
    source:'evidence-spigen.png',
    images:[
      {src:'../spigen-option-advantage.png',alt:'신규 배송 옵션의 비용과 운영상 장점을 정리한 자료'},
      {src:'../spigen-option-risk.png',alt:'신규 배송 옵션의 위험 요인을 정리한 자료'}
    ],
    caption:'직접 작성한 신규 배송 옵션 장점·위험 요인 비교 자료'
  },
  {
    source:'evidence-market.png',
    images:[
      {src:'../market-service-concept.png',alt:'음식 이미지에서 시장 내 판매처를 찾는 서비스 화면'}
    ],
    caption:'음식 이미지 확인부터 시장 내 판매처 탐색까지 연결한 서비스 화면'
  },
  {
    source:'evidence-bld.png',
    images:[
      {src:'../bld-work-request.png',alt:'게더타운 제작 작업 의뢰서'},
      {src:'../bld-operations-manual.png',alt:'반복 문의를 정리한 게더타운 운영 매뉴얼'}
    ],
    caption:'직접 만든 작업 의뢰서와 반복 QA 기반 운영 매뉴얼'
  }
];
artifactSets.forEach(({source,images,caption})=>{
  document.querySelectorAll(`img[src$="${source}"]`).forEach((oldImage)=>{
    const artifact=oldImage.closest('.artifact');
    if(!artifact) return;
    artifact.replaceChildren();
    artifact.classList.toggle('single',images.length===1);
    images.forEach(({src,alt})=>{
      const image=document.createElement('img');
      image.src=src;
      image.alt=alt;
      if(images.length===1) image.className='wide';
      artifact.appendChild(image);
    });
    const note=document.createElement('p');
    note.className='caption artifact-caption';
    note.textContent=caption;
    artifact.appendChild(note);
  });
});
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
