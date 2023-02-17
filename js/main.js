$(function() {

  $('.toggle_btn').on('click', function() {
    if($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  $('#navi a').on('click', function() {
    ('#header').removeClass('open');
  });

  /*スムーススクロール*/
  $('a[href^="#"]').click(function() {
    let href=$(this).attr("href");
    let target=$(href == "#" || href =="" ? 'html' : href);
    let positon =target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
  
  

});