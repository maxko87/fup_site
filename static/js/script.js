$(document).scroll(function() {
  var nav;
  nav = $('.navbar');
  if (nav.hasClass('navbar-fixed-top')) {
    return;
  }
  if (nav.offset().top - nav.outerHeight() <= $(this).scrollTop()) {
    return nav.addClass('navbar-fixed-top');
  } else {
    return nav.removeClass('navbar-fixed-top');
  }
});

$(document).ready(function(){

    $('#application_btn').click(function(){
        $.scrollTo('#application_scroll', {"duration": 1000});
    });

    $('#home_btn').click(function(){
        $.scrollTo(0, {"duration": 1000});
    });

    $('#about_fup_btn').click(function(){
        $.scrollTo('#about_fup_scroll', {"duration": 1000});
    });

    $('#for_fuppers_btn').click(function(){
        $.scrollTo('#for_fuppers_scroll', {"duration": 1000});
    });

    $('#our_people_btn').click(function(){
        $.scrollTo('#our_people_scroll', {"duration": 1000});
    });

    $('#our_sponsors_btn').click(function(){
        $.scrollTo('#our_sponsors_scroll', {"duration": 1000});
    });

    $('.nav li').click(function(f){
        $('.nav li').removeClass("active");
        el = "#" + f.target.id;
        $(el).parent().addClass("active");
    })
    

})
