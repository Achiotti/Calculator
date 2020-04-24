// Business (or back-end logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
   return number1*number2;
};

var divide = function(number1, number2) {
   return number1/number2;
};

// This was the original code that called the result
// var result = divide(number1, number2);
// alert(result);

// They told us to add the code below
// alert(add(number1, number2));



// Everything below this liine is user interface (or front end) logic:

$(document).ready(function() {
 $("form#add").submit(function(even) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output").text(result);
  });
});
