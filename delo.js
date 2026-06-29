
let pages={};
let AAA=true;
let linka=document.location.origin;
let linki=[];
let mark=0;
AAA = 0;
while(AAA<11)
	{
		linki.push(0);
		AAA=AAA+1;
	}
linki[10]=1;
AAA=true;

MathJax.Hub.Config({


tex2jax: {
	inlineMath: [['$','$']],
	displayMath: [['$$', '$$']],
	processEscapes: true
	},

options: {
            renderActions: {
                find: { ".the_content_block": ["span", "div"] } // Ищем формулы только в элементах с классом, начинающимся на "math-"
            }
		}


});



function change_page(e)
				{
					//e.preventDefault();
					//let stro = e.target.getAttribute("href");
					let stro = e;
					let pa = pages[stro];
					if(pa==undefined)
						{
							if(AAA)
							{
							AAA=false;
							let xhr = new XMLHttpRequest();
							xhr.open("GET","arti/"+stro);
							xhr.stro = stro;
							xhr.responseType="text";
							xhr.onload=function(e)
								{
									e = e.target;
									if(e.status!=200) {AAA=true;return;}
									let r = 0;
									linka = stro;
									(r=document.getElementsByClassName("the_content_block")[0]).innerHTML=e.response;
									pa = [r.querySelectorAll("math-a"),r.innerHTML];
									let c = [];
									let tlmc = document.createElement("div");
									tlmc.setAttribute("class","the_local_menu_content");
									c = Array.from(r.querySelectorAll("math-a"));
									
									if(c.length==0) 
										{
											tlmc.setAttribute("innerText","Ссылок нет");
										}
									else
										c.forEach((e)=>{
											if(e.getAttribute("linka")==undefined) return;
											let a = document.createElement("math-a");
											a.setAttribute("href",e.getAttribute("href"));
											a.innerText = e.getAttribute("linka")
											tlmc.appendChild(a);}
											
											);
									pa[0] = tlmc;
									(c=document.getElementsByClassName("the_local_menu")[0]).
									removeChild(document.getElementsByClassName("the_local_menu_content")[0]);
									c.appendChild(pa[0]);
									MathJax.Hub.Typeset();
									AAA=true;
								};
							xhr.send();
							}
						}
					else
						{
							linka = stro;
							let c=0;
							(c=document.getElementsByClassName("the_local_menu")[0]).
									removeChild(document.getElementsByClassName("the_local_menu_content")[0]);
							c.appendChild(pa[0]);
							
							document.getElementsByClassName("the_content_block")[0].innerHTML = 
							pa[1];
						}
					
				}


class A_math_new_tag extends HTMLElement 
{
	constructor()
		{
			super();
			this.addEventListener("click",
			(e)=>{
				e.preventDefault();
				e = e.target;
				change_page(e.getAttribute("href"));}
			);
			
		}
	
	
	
}


let G=0;





function delo()
{
	function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
	

	let l = (new URL(window.location));
	let c = l.searchParams;
	if(c.size==0)
		{
			let qwe = 1;
			customElements.define("math-a",A_math_new_tag);
			if((qwe=getCookie("page"))!=undefined)
			( ()=> {
    // Получаем строку со всеми куками
    const cookies = document.cookie.split(";");

    // Перебираем каждую куку
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];

        // Находим позицию первого знака '='. Все, что левее — это имя куки.
        // Это нужно, чтобы не учитывать возможные пробелы в начале строки.
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        // Обрезаем возможные пробелы по краям и устанавливаем куку с истекшим сроком.
        // Установка только имени и даты в прошлом достаточно для удаления.
        document.cookie = name.replace(/^\s+|\s+$/g, "") + "=;expires=" + new Date(0).toUTCString() + ";path=/";
    }

	change_page(qwe);
})();
		}
	else
		{
			let oo = l.href;
			l = l.host;
			let stro = "";
			c.forEach((q,a)=>{
				
				//stro=stro+a+"="+q+"; "
				stro=a+"="+q+"; "+" domain="+l+"; max-age=3600; path=/; ";
				document.cookie=stro;
				}
				);
			stro = stro+" domain="+l+"; max-age=3600; path=/; ";
			document.location=document.location.host+document.location.pathname ;
			
		}
}


function sohran()
	{
		navigator.clipboard.writeText(document.location.href+"?page="+linka);
		
	}




