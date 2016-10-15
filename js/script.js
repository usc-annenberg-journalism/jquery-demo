/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block
	
	// this first line says "if I click on one of these two html elements, a specific function is going to happen
	$('#button-id, #disappear').click(function(){
		/* console.log is a way to check yourself before your wreck yourself. you can open up the console by right clicking on your browser page and hitting Inspect Element. if you have jQuery errors, it will show in the console. Writing a message to show in console.log is also a great way to test whether you wrote a jQuery function or command correctly. It's recommended you write your jQuery and then write a console.log note so you can test every step of the way. Write jQuery, test, write jQuery, test, rinse and repeat as necessary. */
		console.log("This image disappeared (or reappeared)!");
		//what's gonna happen when I click my button that has an id of "button-id"?!!!!!!
		$('#disappear').fadeToggle(2000);
		
	}); // this is the end of my function, yay!

}); //end document.ready block
