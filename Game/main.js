$(document).ready(function(){
    //Index Page
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();

     today = mm + '/' + dd + '/' + yyyy;
     $('.recpies-img time').text(today);
     $('#log').click(function(){
        window.location.href = "http://127.0.0.1:5500/login.html";
      })

    // User Page
    
    //mobile navbar
    $(document).ready(function(){
      $('.offcanvas-menu-wrapper li').click(function(){
           $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
          $(".offcanvas-menu-overlay").removeClass("active");
      })
  })
    $(".canvas-open").click(function () {
      $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
      $(".offcanvas-menu-overlay").addClass("active");
  });
  $(".canvas-close, .offcanvas-menu-overlay").click(function () {
      $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
      $(".offcanvas-menu-overlay").removeClass("active");
  });


  //Likes and comments
  var likes = 0;
  $('.fa-thumbs-up').click(function(){
    $('.like').html(likes);
    likes++
  })


    // Scroll top icon   
        var scrollTop = $(".scrollTop");
        $(window).scroll(function() {
          var topPos = $(this).scrollTop();
          if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

          } else {
            $(scrollTop).css("opacity", "0");
          }

        }); 

        $(scrollTop).click(function() {
          $('html, body').animate({
            scrollTop: 0
          }, 800);
          return false;
        });
})
