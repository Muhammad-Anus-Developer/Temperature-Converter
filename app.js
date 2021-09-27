// var sum = 5+3;5
// document.write("Sum of" + " " + "5" + " " + "and" + " " + "3" + " " + "is" + " " + sum);

// var a = 5;
// var b = 7 + 6;
// var c = b-b
// document.write("Initial Value of variable is" + " " + a + "<br />")
// document.write( "Value after increment is" + " " + ++a + "<br />")
// document.write( "Value after addition is" + " " + b +"<br />")
// document.write( "Value after decrement is" + " " + --b +"<br />")
// document.write( "Value after remainder is" + " " + c)

// var ticket = 600;
// var quantity = 5;
// var price = ticket * quantity
// document.write("Total Cost to buy" + " " + quantity + " " + "tickets to a movie is" + " " + price + "PKR")

// var paro = document.getElementById("pera");
// paro.innerHTML = "Tables of 4" + "<br />" + "4 x 1 =" + " " + 4*1 + "<br />" + "4 x 2 =" + " " + 4*2+ "<br />" + "4 x 3 =" + " " + 4*3+ "<br />" + "4 x 4 =" + " " + 4*4+ "<br />" + "4 x 5 =" + " " + 4*5+ "<br />" + "4 x 6 =" + " " + 4*6+ "<br />" + "4 x 7 =" + " " + 4*7+ "<br />" + "4 x 8 =" + " " + 4*8+ "<br />" + "4 x 9 =" + " " + 4*9+ "<br />" + "4 x 10 =" + " " + 4*10 

function celsius(){
    var centigrade = prompt("Enter Celsius! (In Numbers)");
    var ans = (centigrade * 9 / 5 ) + 32
     var pera = document.getElementById("parop")
    pera.innerHTML +=  "<strong>" + centigrade +  "</strong>"+ "<sup>"+ "o" +"</sup>" +"C" + " " + "is" + " " +  "<strong>" + ans +  "</strong>" +"<sup>"+ "o" +"</sup>" + "F"+"<br />"
}
function fahrenheit(){
    var heit = prompt("Enter Fahrenheit! (In Numbers)");
    var ans = (heit - 32) * 5/9
    var pera = document.getElementById("parop")
    pera.innerHTML += "<strong>" + heit + "</strong>" +"<sup>"+ "o" +"</sup>" + "F" + " " + "is" + " " + "<strong>" + ans + "</strong>" +"<sup>"+ "o" +"</sup>" + "C"+"<br />"
}