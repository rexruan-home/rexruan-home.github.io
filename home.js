let language='zh';
try{language=new URLSearchParams(location.search).get('lang')||localStorage.getItem('rex-language')||'zh'}catch{}
if(!['zh','en'].includes(language))language='zh';
const toggle=document.querySelector('.nav-toggle');
const nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
function render(){
 document.documentElement.lang=language==='en'?'en':'zh-CN';
 document.querySelectorAll('[data-zh][data-en]').forEach(el=>el.innerHTML=el.dataset[language]);
 document.querySelectorAll('[data-alt-zh]').forEach(el=>el.alt=el.dataset[language==='en'?'altEn':'altZh']);
 const langButton=document.querySelector('.language');langButton.textContent=language==='en'?'中文':'EN';langButton.setAttribute('aria-label',language==='en'?'切换至中文':'Switch to English');
 toggle.setAttribute('aria-label',language==='en'?'Toggle navigation':'切换导航');
 document.querySelectorAll('.resume-link,.project-link').forEach(el=>el.href='resume.html?lang='+language+(el.classList.contains('project-link')?'#projects':''));
 document.querySelectorAll('.home-link').forEach(el=>el.href='index.html?lang='+language);
 try{localStorage.setItem('rex-language',language)}catch{}
}
render();
document.querySelector('.language').addEventListener('click',()=>{language=language==='zh'?'en':'zh';const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);render()});
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(el=>el.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();if(document.activeElement&&nav.contains(document.activeElement))toggle.focus()}});
