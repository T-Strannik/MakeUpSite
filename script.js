window.addEventListener('scroll', function(){
	if(window.pageYOffset>300){
		document.getElementById('top').style.display = 'block'
	}
	else{
		document.getElementById('top').style.display = 'none'
	}
});

var scroll = null;
document.getElementById('top').addEventListener('click', function(e){
	clearInterval(scroll);
	scroll = setInterval(function(){
		window.scrollBy(0, -20);
		if(window.pageYOffset == 0){
			clearInterval(scroll);
		}
	}, 10);
	e.preventDefault();
});