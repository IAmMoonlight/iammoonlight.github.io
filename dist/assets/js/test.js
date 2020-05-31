window.onload = function(){
	/* Scroll to block by click */
	let menu_items = document.querySelectorAll('.header nav menu li a');
	if(menu_items.length > 0){
		for(let i = 0; i < menu_items.length; i++){
			let href = menu_items[i].getAttribute('href');
			menu_items[i].onclick = function(e){
				e.preventDefault();
				let elem = document.querySelector(href);
				elem.scrollIntoView({
					behavior: 'smooth'
				});
			}
		}
	}
	/* Scroll to block by click */

	
}