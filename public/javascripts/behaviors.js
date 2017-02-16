$(document).ready(function(){
  $('.m-item').click(function(){
    $('.m-item').removeClass("active");
    $(this).addClass("active");
  });
});
