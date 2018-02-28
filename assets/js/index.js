var items = ['Stand Out', 'Clean', 'New', 'Amazing', 'Lovely'];

var element = document.getElementById('click');

if(element!=null){
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

}



/*services*/
function random_item(colorsArrLength){
return Math.floor(Math.random()*colorsArrLength)
}
var names=document.getElementsByClassName("head3");
var colorsArr = ['#000', 'red', 'green', 'purple'];


//setTimeout(, 500);
setInterval (function(){
    names[random_item(6)].style.color= colorsArr[random_item(colorsArr.length)];
   
},2000);


/*connect*/
// Form validation code will come here.
      function validate()
      {
      
         if( document.myForm.Name.value == "" )
         {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
         
         if( document.myForm.Email.value == "" )
         {
            alert( "Please provide your Email!" );
            document.myForm.Email.focus() ;
            return false;
         }
         
         if( document.myForm.tele.value == "" ||
         isNaN( document.myForm.tele.value ) ||
         document.myForm.tele.value.length != 11 )
         {
            alert( "Please provide a contact." );
            document.myForm.contact.focus() ;
            return false;
         }
         
         if( document.myForm.services.value == "-1" )
         {
            alert( "Please select the service!" );
            return false;
         }
         return( true );
      }


     /* pricing*/ 
     function myFunction() {
    document.getElementById("price").innerHTML = "";
}