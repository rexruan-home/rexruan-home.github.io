(() => {
 const items=[['index.html','首页','Home'],['work.html','项目','Work'],['resume.html','简历','Resume'],['about.html','关于','About'],['skills.html','技能','Skills'],['contact.html','联系','Contact']];
 const header=document.querySelector('.site-header');
 if(!header)return;
 header.innerHTML=`<a class="brand" href="index.html"><span class="monogram">RR</span>Rex Ruan</a><div class="nav-tools"><nav id="navigation" aria-label="Main navigation">${items.map(([file,zh,en])=>`<a data-page="${file}" href="${file}" data-zh="${zh}" data-en="${en}">${zh}</a>`).join('')}</nav><button class="language" type="button" aria-label="Switch to English">EN</button><button class="nav-toggle" type="button" aria-label="切换导航" aria-expanded="false" aria-controls="navigation"><span></span><span></span></button></div>`;
 const nav=header.querySelector('nav');const toggle=header.querySelector('.nav-toggle');
 function close(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
 window.updateSiteNavigation=function(language){
  const page=location.pathname.split('/').pop()||'index.html';
  header.querySelector('.brand').href='index.html?lang='+language;
  nav.querySelectorAll('a').forEach(a=>{a.href=a.dataset.page+'?lang='+language;a.textContent=a.dataset[language];const active=a.dataset.page===page;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  toggle.setAttribute('aria-label',language==='en'?'Toggle navigation':'切换导航');
 };
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open))});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(nav.contains(document.activeElement))toggle.focus();close()}});
})();
