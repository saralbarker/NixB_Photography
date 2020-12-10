$(document).ready(function() {
	$('.lightbox_trigger').click(function(e){
			e.preventDefault();
			// getting and storing image href
			var image_href = $(this).attr("href");
			// if #lightbox exists
			if ($('#lightbox').length > 0) {
				// inserts img tag with stored href
				$('#content').html('<img src="' + image_href + '" />');
				// show lightbox window
				$('#lightbox').show();
			} else { //if #lightbox does not exist
				// stores lightbox html content
				var lightbox =
				'<div id="lightbox">' +
					'<p>Click anywhere to close</p>' +
					'<div id="content">' +
						'<img src="' + image_href + '" />' +
					'</div>' +
				'</div>';
				// inserts lightbox html content into page
				$('body').append(lightbox);
			}
			// on click, hide lightbox window
      $('#lightbox').on('click', function() {
        $('#lightbox').hide();
      });
	});
	
});
