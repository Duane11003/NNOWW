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

  $(document).ready(function () {
    $('li.bmr_click').click(function() {
    $('html, body').animate({
      scrollTop: $("#bmr_head_1").offset().top
    }, 'slow')
  }), 
    $('li.photo_click').click(function (){
      $('html, body').animate({
        scrollTop: $("#photo_head_1").offset().top
      }, 'slow')
    }),
    $('li.sign_up_click').click(function (){
      $('html, body').animate({
        scrollTop: $("h1.sign_up").offset().top
      }, 'slow')
    }),
    $('li.about_click').click(function (){
      $('html, body').animate({
        scrollTop: $("div.about_us").offset().top
      }, 'slow')
    })
  });

  $('li.bmr_click').hover(function() {
    $(this).toggleClass('active')
    $('li.about_click').toggleClass('active');
  },
  function(){
    $(this).toggleClass('active')
    $('li.about_click').toggleClass('active');
  });

  $('li.photo_click').hover(function() {
    $(this).toggleClass('active')
    $('#photo_head_1').toggleClass('active')
    $('li.about_click').toggleClass('active');
  },
  function(){
    $(this).toggleClass('active')
    $('li.about_click').toggleClass('active');
  });

  $('li.sign_up_click').hover(function() {
    $(this).toggleClass('active')
    $('#photo_head_1').toggleClass('active')
    $('li.about_click').toggleClass('active');
  },
  function(){
    $(this).toggleClass('active')
    $('li.about_click').toggleClass('active');
  });