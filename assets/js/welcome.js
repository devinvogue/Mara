var items = ['Stand Out', 'Clean', 'New', 'Amazing', 'Lovely'];

var element = document.getElementById('click');
var motto = document.getElementById('down');
console.log(element);
element.addEventListener('click', function(){
	motto.innerHTML = random_item(items)



})


function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

//setTimeout(, 500);
setInterval (function(){
	motto.innerHTML = random_item(items);
   
},3000);


