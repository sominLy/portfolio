const slides=[...document.querySelectorAll('.slide')];
const current=document.querySelector('[data-current]');
const total=document.querySelector('[data-total]');
const progress=document.querySelector('.progress');
const portfolioKey=location.pathname.split('/').filter(Boolean).pop();
const copy={
  global:{
    headings:[
      '흩어진 정보를 모아,<br>함께 결정할 기준을 만듭니다.',
      '비용과 위험을 함께 놓고,<br>도입할 수 있는 조건을 찾았습니다.',
      '의견이 부딪힌 이유는,<br><span class="green">서로 보는 기준이 달랐기 때문</span>입니다.',
      '모두를 설득하기보다,<br><span class="green">함께 검토할 조건</span>을 만들었습니다.',
      '사람이 판단할 일은 남기고,<br>반복해서 찾는 일만 줄였습니다.',
      'AI에게 일을 맡기기 전에,<br><span class="green">사람이 판단할 경계</span>부터 정했습니다.',
      '빠른 검색에서 끝내지 않고,<br><span class="green">안전하게 쓰는 조건</span>까지 담았습니다.',
      '해외 사용자의 불편을,<br>실제 탐색 장면에서 다시 읽었습니다.',
      '한쪽의 불편이 아니라,<br><span class="green">찾는 사람과 관리하는 사람</span>을 함께 봤습니다.',
      '사회 변화를 지켜보다,<br>친구들과 쓸 작은 베타를 만들었습니다.',
      '낯선 요구를,<br>누구나 확인할 문서로 바꿨습니다.',
      '빠르게 찾고, 함께 판단하고,<br>끝까지 실행하는 사업개발자로 성장하겠습니다.',
      '낯선 시장에서도,<br>첫 판단의 근거부터 만들겠습니다.'
    ],
    sub:'시장과 조직의 서로 다른 언어를<br><span class="green">실행 가능한 조건으로 바꾸는 지원자</span> 이소민입니다.',
    oneLines:[
      '새 배송 옵션을 도입할지 말지를 설득하기보다, 비용 절감 효과가 재고와 일정의 부담보다 커지는 물량부터 찾았습니다.',
      '40여 개 캠페인 시트에 흩어진 단가 이력을 하나로 모으되, 캠페인 맥락을 읽어야 하는 판단은 사람에게 남겼습니다.',
      '‘정보가 부족하다’는 말에 머물지 않고, 외국인이 음식을 찾는 순서와 점포가 정보를 관리하는 방식을 함께 살폈습니다.'
    ]
  },
  healthcare:{
    headings:[
      '자료를 모으기 전에,<br>다음 결정을 위한 질문부터 세웁니다.',
      '질문을 좁히고, 근거를 읽어,<br><span class="green">실행안으로 옮겼습니다.</span>',
      '데이터에서,<br>외국인이 음식을 찾는 장면을 발견했습니다.',
      '많이 모으는 것보다,<br><span class="green">무엇을 알아야 하는지</span>부터 정했습니다.',
      '기술의 한계 앞에서,<br><span class="green">사용자의 행동</span>으로 돌아갔습니다.',
      '흥미로운 응답보다,<br>실무에서 쓸 수 있는 질문을 만들었습니다.',
      '참여자의 관심을,<br><span class="green">의사결정에 필요한 질문</span>으로 바꿨습니다.',
      '낯선 도메인일수록,<br>프로젝트의 기준부터 세웠습니다.',
      '데이터를 쓰는 방법과,<br><span class="green">어디까지 공개할지</span>를 함께 정했습니다.',
      '분석의 끝은 보고서가 아니라,<br>다음 의사결정입니다.',
      '데이터를,<br>실행 가능한 전략으로 바꾸겠습니다.'
    ],
    sub:'데이터에서 답을 찾기 전에<br><span class="green">사업이 답해야 할 질문을 세우는 지원자</span> 이소민입니다.',
    oneLines:[
      'GPS의 한계를 기능으로 덮는 대신, 외국인이 음식 사진에서 판매처를 찾는 과정을 다시 살펴 서비스의 방향을 바꿨습니다.',
      '참여자의 관심사만 묻던 방식에서 벗어나, 사내 의사결정 주제와 맞닿은 질문을 설계해 보고서로 연결했습니다.'
    ]
  },
  univ:{
    headings:[
      '기술을 설명하기 전에,<br>실제로 쓰는 장면부터 봅니다.',
      '사용 장면을 보고, 역할을 나눠,<br><span class="green">협업 기준으로 남겼습니다.</span>',
      '친구들과 직접 써보며,<br>처음 세운 가설을 고쳤습니다.',
      '처음에는,<br><span class="green">혼자 일할 때의 소속감</span>을 문제로 봤습니다.',
      '함께 써보니,<br><span class="green">스스로 일을 관리하는 어려움</span>이 보였습니다.',
      '사람이 판단할 일은 남기고,<br>반복해서 찾는 일은 시스템에 맡겼습니다.',
      '기능을 만들기 전에,<br><span class="green">AI의 역할과 운영 조건</span>부터 정했습니다.',
      '분석에서 멈추지 않고,<br>팀이 구현할 제안으로 옮겼습니다.',
      '고객의 말을,<br><span class="green">제작팀이 움직일 기준</span>으로 바꿨습니다.',
      '좋은 AI 서비스는,<br>사용할 사람의 환경에서 시작합니다.',
      '사용자의 문제를,<br>현장에서 쓰는<br>AI 서비스로 만들겠습니다.'
    ],
    sub:'AI·클라우드가 필요한 순간을 찾아<br><span class="green">실제로 쓰는 서비스로 구체화하는 지원자</span> 이소민입니다.',
    oneLines:[
      '소속감을 위한 가상 오피스로 시작했지만, 함께 써보며 혼자 일할 때의 자기관리 문제를 발견해 기능의 우선순위를 바꿨습니다.',
      'AI가 자주 틀리는 맥락 판단은 사람에게 남기고, 통합·정규화·검색처럼 반복되는 일만 자동화했습니다.'
    ]
  }
};
const selectedCopy=copy[portfolioKey];
if(selectedCopy){
  document.querySelectorAll('h1,h2').forEach((heading,index)=>{
    if(selectedCopy.headings[index]){
      heading.innerHTML=selectedCopy.headings[index];
      heading.classList.add('manual');
    }
  });
  const sub=document.querySelector('.cover .sub');
  if(sub&&selectedCopy.sub) sub.innerHTML=selectedCopy.sub;
  document.querySelectorAll('.project-cover .one-line').forEach((line,index)=>{
    if(selectedCopy.oneLines[index]) line.textContent=selectedCopy.oneLines[index];
  });
}
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
