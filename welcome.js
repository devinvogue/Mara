var element = document.getElementById('click');
var motto = document.getElementById('down');
console.log(element);
element.addEventListener('click', function(){
	motto.innerHTML = 'Clean'
})

