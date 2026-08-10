const menu=document.querySelector('.menu-toggle');const links=document.querySelector('.nav nav');if(menu)menu.addEventListener('click',()=>links.classList.toggle('open'));document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

// Contact address
const address='Ground Floor, Pawar Vasti, Biradwadi, Gat No 12, Taluka Khed, Chakan, Pune - 410501, Maharashtra, India';
const foot=document.querySelector('footer .foot');
if(foot){const col=document.createElement('div');col.innerHTML='<h4>Visit Us</h4><p class="address">'+address+'</p>';foot.appendChild(col);}
const card=document.querySelector('.contact-card');
if(card){const block=document.createElement('div');block.className='address-block';block.innerHTML='<strong>Address</strong><span>'+address+'</span>';card.appendChild(block);}