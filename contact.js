document.querySelector('.copy-email').addEventListener('click',async()=>{
 const status=document.querySelector('.copy-status');const en=document.documentElement.lang==='en';
 try{await navigator.clipboard.writeText('769751229@qq.com');status.textContent=en?'Email address copied.':'邮箱已复制。'}
 catch{status.textContent=en?'Please select the email address above to copy it.':'请选中上方邮箱地址进行复制。'}
});
