// bmr calculator

let bmr;

function calculation() {
  let weigth = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  if (gender === "male") {
  bmr = 66 + ( 6.2 * weigth ) + ( 12.7 * height ) - ( 6.76 * age );
  }
  else {
  bmr = 655.1 + ( 4.35 * weigth ) + ( 4.7 * height ) - ( 4.7 * age );
  }
}

document.getElementById('calculate').addEventListener("click", function() {
  calculation();
  document.getElementById('results').innerHTML = "Your BMR is " + bmr;
document.getElementById("weight").value = '';
document.getElementById("height").value = '';
document.getElementById("age").value = '';
})

//bmr calculator end

// scroll

$("#scroll").click(function() {
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    return false;
  });