$(document).ready(function() {
  $(function() {
    var currentImage = '';
    
    // Show lightbox when an image is clicked
    $('img').click(function() {
      currentImage = $(this);
      var lightbox = $('#lightbox'),
          imgurl = 'url(' + $(this).attr('src') + ')';  //attr = attribute //
      lightbox.fadeIn('slow');
      $('body').children().not('#lightbox').fadeOut('fast');

      $('#lightbox').css('background-image', imgurl);
    });

    // Hide lightbox when the 'X' is clicked
    $('#lightbox span').click(function() {
      $('#lightbox').fadeOut('slow');
      $('body').children().not('#lightbox').fadeIn('fast');
    });
    
  // Change to previous image when left arrow is clicked
    $('button#left').click(function() {
      var imgurl = '',
          prevImage;

      if (currentImage.is(':first-child')) {
        prevImage = currentImage.siblings(':last-child');
      }
      else {
        prevImage = currentImage.prev();
      }

      imgurl = 'url(' + prevImage.attr('src') + ')';
      currentImage = prevImage;
      $('#lightbox').css('background-image', imgurl);
    });

    // Change to next image when right arrow is clicked
    $('button#right').click(function() {
      var imgurl = '',
          nextImage;

      if (currentImage.is(':last-child')) {
        nextImage = currentImage.siblings(':first-child');
      }
      else {
        nextImage = currentImage.next();
      }

      imgurl = 'url(' + nextImage.attr('src') + ')';
      currentImage = nextImage;
      $('#lightbox').css('background-image', imgurl);
    });
  });
      // alert("I am working");
});