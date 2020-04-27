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
  $("#outputadd").text(result);
  });


  $("form#subtract").submit(function(even) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var resultsub = subtract(number1, number2);
    $("#outputsubtract").text(resultsub);
    });

  $("form#multiply").submit(function(even) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var resultmult = multiply(number1, number2);
    $("#outputmultiply").text(resultmult);
  });

  $("form#divide").submit(function(even) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var resultdiv = divide(number1, number2);
    $("outputdiv").text(resultdiv);
  });
});