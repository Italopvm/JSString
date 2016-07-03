function anyWord(){

	var word = prompt("enter any word");
	var length = word.length;
	var third = word.charAt(2);
	var lowercase = word.toLowerCase();
	var uppercase = word.toUpperCase();
	var sub = word.substring(1,5);



	alert("This is your word: " + word + " " +
		  "This is the length of your word: " + length + " " +
		  "This is the third character of your word: " + third + " " +
		  "lowercase: " + lowercase + " " + "uppercase: " + uppercase +
		  " " + "I like to practice with your " + word + 
		  "This is the substring of the word " + sub);


}
