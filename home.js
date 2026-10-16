let language='zh';
try{language=new URLSearchParams(location.search).get('lang')||localStorage.getItem('rex-language')||'zh'}catch{}
if(!['zh','en'].includes(language))language='zh';
function render(){
 document.documentElement.lang=language==='en'?'en':'zh-CN';
 document.querySelectorAll('[data-zh][data-en]').forEach(el=>el.innerHTML=el.dataset[language]);
 document.querySelectorAll('[data-alt-zh]').forEach(el=>el.alt=el.dataset[language==='en'?'altEn':'altZh']);
 const langButton=document.querySelector('.language');langButton.textContent=language==='en'?'中文':'EN';langButton.setAttribute('aria-label',language==='en'?'切换至中文':'Switch to English');
 document.querySelectorAll('.resume-link,.project-link').forEach(el=>el.href='resume.html?lang='+language+(el.classList.contains('project-link')?'#projects':''));
 document.querySelectorAll('.home-link').forEach(el=>el.href='index.html?lang='+language);
 document.querySelectorAll('.work-link').forEach(el=>el.href='work.html?lang='+language);
 window.updateSiteNavigation(language);
 if(document.body.dataset.titleEn)document.title=(language==='en'?document.body.dataset.titleEn:document.body.dataset.titleZh)+' | Rex Ruan';
 try{localStorage.setItem('rex-language',language)}catch{}
}
render();
document.querySelector('.language').addEventListener('click',()=>{language=language==='zh'?'en':'zh';const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);render()});
