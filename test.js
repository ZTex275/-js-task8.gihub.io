	var list = document.getElementById('square')
	var add_b = document.getElementById('add')
	var div_el = document.createElement('div');
	
	var backg = document.getElementById('background');
	var input = document.getElementById('input');
	
	var up_b = document.getElementById('up')
	var left_b = document.getElementById('left')
	var right_b = document.getElementById('right')
	var down_b = document.getElementById('down')
	
	var pos, posx, posy; pos=0; posx=0; posy=0;

	div_el.style.width = "100px";
	div_el.style.height = "100px";
	div_el.style.backgroundColor = 'green';
	list.appendChild(div_el)

add_b.addEventListener('click', function() {
	var sqr = document.createElement('div');
	sqr.style.width = "100px";
	sqr.style.height = "100px";
	sqr.style.backgroundColor = 'green';
	pos += 20;
	sqr.style.marginLeft = pos + "px";
	list.appendChild(sqr)
});

up_b.addEventListener('click', function() {
	posy -= 20;
	list.style.marginTop = posy + "px";
});

left_b.addEventListener('click', function() {
	posx -= 20;
	list.style.marginLeft = posx + "px";
});

right_b.addEventListener('click', function() {
	posx += 20;
	list.style.marginLeft = posx + "px";
});

down_b.addEventListener('click', function() {
	posy += 20;
	list.style.marginTop = posy + "px";
});



backg.addEventListener('click', function() {
	if(input.value=="blue"){
		for (var i = 0; i < list.childElementCount; i++){
            list.children[i].style.backgroundColor = "blue";
            }
		}
		else{
			alert("Невозможно заменить на такой цвет! \nЦвет квадрата можно заменить только на blue!")
		}
});

