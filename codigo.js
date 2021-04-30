function paginaregistro(){	
	window.open("RegistrarCliente.html");	
}

function paginaMenuPrincipal(){	
	window.open("MenuPrincipal.html");	
}

function paginaIndex(){	
	window.open("index.html");	
}

const btn = document.querySelector('#menu-btn');
    const menu =document.querySelector('#sidemenu');
    btn.addEventListener('click', e=>{
      menu.classList.toggle("menu-expanded");
      menu.classList.toggle("menu-collapsed");

      document.querySelector('body').classList.toogle('body-expanded');
    });