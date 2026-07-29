const slides=[...document.querySelectorAll('.slide')];
const current=document.querySelector('[data-current]');
const total=document.querySelector('[data-total]');
const progress=document.querySelector('.progress');
const portfolioKey=location.pathname.split('/').filter(Boolean).pop();
const copy={
  global:{
    headings:[
      '시장과 조직의 정보를 정리해,<br>함께 판단할 기준을 만들어왔습니다.',
      '비용·재고·작업시간을 비교해,<br>새 배송 옵션의 적용 조건을 정했습니다.',
      '확인해보니 두 부서는,<br><span class="green">서로 다른 기준으로 판단하고 있었습니다.</span>',
      '비용과 위험을 한 표에서 비교하고,<br><span class="green">시즌 물량부터 적용</span>하도록 제안했습니다.',
      '40여 개 시트의 단가 이력을 모아,<br>검색에 걸리는 시간을 줄였습니다.',
      'AI 분류에서 오류가 생겨,<br><span class="green">사람이 판단할 부분</span>을 다시 나눴습니다.',
      '원본은 읽기 전용으로 연결하고,<br><span class="green">내부 정보의 공개 범위</span>를 나눴습니다.',
      '외국인이 음식을 찾는 순서를 확인해,<br>서비스 방향을 바꿨습니다.',
      '외국인과 점포 운영자가,<br><span class="green">각각 겪는 문제</span>를 나눠 봤습니다.',
      '친구들과 직접 사용해보니,<br>소속감 외에 일정 관리도 필요했습니다.',
      '반복되는 질문을 모아,<br>작업 의뢰서와 QA 매뉴얼로 정리했습니다.',
      '앞으로는 해외 시장과 파트너의 요구를 정리해,<br>사업 검토에 필요한 근거를 만들겠습니다.',
      '시장과 파트너를 먼저 이해하고,<br>사업 검토에 필요한<br>근거를 만들겠습니다.'
    ],
    sub:'시장과 조직마다 다른 정보를 확인하고,<br><span class="green">사업 검토에 필요한 기준을 정리해온</span> 이소민입니다.',
    oneLines:[
      '새 배송 옵션을 도입할지 말지를 설득하기보다, 비용 절감 효과가 재고와 일정의 부담보다 커지는 물량부터 찾았습니다.',
      '40여 개 캠페인 시트에 흩어진 단가 이력을 하나로 모으되, 캠페인 맥락을 읽어야 하는 판단은 사람에게 남겼습니다.',
      '‘정보가 부족하다’는 말에 머물지 않고, 외국인이 음식을 찾는 순서와 점포가 정보를 관리하는 방식을 함께 살폈습니다.'
    ]
  },
  healthcare:{
    headings:[
      '자료를 모으기 전에,<br>이번 조사로 무엇을 판단할지 먼저 정합니다.',
      '질문을 정하고 자료를 확인한 뒤,<br><span class="green">실행할 내용으로 정리해왔습니다.</span>',
      '외국인이 음식 이름을 모를 때,<br>사진부터 찾는다는 점을 확인했습니다.',
      '자료를 모으기 전에,<br><span class="green">먼저 확인할 질문</span>을 정했습니다.',
      'GPS로 점포를 구분하기 어려워,<br><span class="green">이미지 중심 탐색</span>으로 바꿨습니다.',
      '참여자의 관심사와,<br>사내에서 논의하던 주제를 함께 보고,<br>질문을 다시 만들었습니다.',
      '응답을 모으는 데서 끝내지 않고,<br><span class="green">제안서에 쓸 수 있게</span> 정리했습니다.',
      '요구사항이 반복해서 누락돼,<br>작업 의뢰서와 QA 매뉴얼을 만들었습니다.',
      '사진과 위치 정보를 받을 때,<br><span class="green">수집하고 공개할 범위</span>를 먼저 정했습니다.',
      '분석 결과는,<br>다음에 무엇을 할지 정할 수 있어야 했습니다.',
      '자료를 정리하는 데서 끝내지 않고,<br>다음 실행까지 제안하겠습니다.'
    ],
    sub:'자료를 많이 모으기보다,<br><span class="green">먼저 확인할 질문을 정해온</span> 이소민입니다.',
    oneLines:[
      'GPS의 한계를 기능으로 덮는 대신, 외국인이 음식 사진에서 판매처를 찾는 과정을 다시 살펴 서비스의 방향을 바꿨습니다.',
      '참여자의 관심사만 묻던 방식에서 벗어나, 사내 의사결정 주제와 맞닿은 질문을 설계해 보고서로 연결했습니다.'
    ]
  },
  univ:{
    headings:[
      '기술을 먼저 정하기보다,<br>누가 어떻게 사용할지부터 확인합니다.',
      '사용하는 상황을 확인하고,<br><span class="green">필요한 기능을 정한 뒤,</span><br>협업 문서로 남겼습니다.',
      '친구들과 직접 사용하면서,<br>필요한 기능을 다시 정했습니다.',
      '처음에는 혼자 일할 때,<br><span class="green">소속감을 느끼기 어렵다</span>고 봤습니다.',
      '함께 사용해보니,<br><span class="green">일정과 할 일을 관리하는 문제</span>도 있었습니다.',
      '40여 개 시트의 단가 이력을 모아,<br>반복해서 찾는 시간을 줄였습니다.',
      'AI 분류에서 오류가 생겨,<br><span class="green">사람과 AI가 맡을 일</span>을 다시 나눴습니다.',
      '분석 결과를,<br>팀이 구현할 기능과 화면으로 정리했습니다.',
      '반복되는 질문을 모아,<br><span class="green">작업 의뢰서와 QA 매뉴얼</span>로 정리했습니다.',
      'AI 기능을 정하기 전에,<br>사용자의 업무와 제약을 먼저 확인하겠습니다.',
      '기술부터 제안하지 않고,<br>사용자의 업무와 제약을<br>먼저 확인하겠습니다.'
    ],
    sub:'기술을 먼저 제안하기보다,<br><span class="green">실제 사용자의 업무를 먼저 확인해온</span> 이소민입니다.',
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
