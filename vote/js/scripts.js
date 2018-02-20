

$(function() {
  var age = parseInt(prompt('Enter your age numerically.'));

  if (age >= 18) {
    $('#ofAge').show();
  } else {
    $('#minor').show();
  }
});
