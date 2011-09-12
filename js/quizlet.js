$(document).ready(function() {
  $('#edit-select-card').change(function() {
    if ($(this).val()) {
      window.location = $(this).val();
    }
  });
  $('.flashcard_sidea').attr('checked', false);  
  $('.flashcard_sideb').attr('checked', false);
  $('.flashcard_bothside').attr('checked', true)
  if ($('.quizet_list img').length <= 0) {
    $('#quizlet_images').hide();  
  }
  $('#quizlet_images').click(function() {
    if ($(this).html() == 'Hide Images') {
      $(this).html('Display Images');  
      $('.quizet_list img').hide();
    }
    else {
      $(this).html('Hide Images');
      $('.quizet_list img').show();
    }
    return false;
  });
  $('.flashcard_bothside').click(function() {
    if(this.checked == true) {
      $('#flashcard_sidea').hide();
      $('#flashcard_sideb').hide();
      $('.flashcard_sidea').attr('checked', false);  
      $('.flashcard_sideb').attr('checked', false);
      $('.sideA').show();
      $('.sideB').show(); 
      $('.flashcard_content').removeClass('flashcard_flip');  
    } 
    else {
      $('#flashcard_sidea').show();
      $('#flashcard_sideb').show(); 
      $('.sideA').hide();
      $('.flashcard_sideb').attr('checked', true);
      $('.flashcard_content').addClass('flashcard_flip');     
    }
  });
  $('.flashcard_sidea').click(function() {
     if (this.checked == true) {
       $('.flashcard_sideb').attr('checked', false);  
     }
     flashcard_sidea_flip();
  });
  $('.flashcard_sideb').click(function() {
     if (this.checked == true) {
       $('.flashcard_sidea').attr('checked', false);  
     }
     flashcard_sideb_flip();
  });
  $('.flashcard_next').click(function() {
    var count = parseInt($('.flashcard_count #flashcard_cnts').html());
    var max_count = parseInt($('.flashcard_count #flashcard_cntt').html());
    var newcnt = count+1;
    if (newcnt <= max_count) {
      $('.sides_content').hide();
      $('#sides'+newcnt).fadeIn('slow'); 
      $('#flashcard_cnts').html(newcnt);
      flashcard_progress_bar(newcnt, max_count);
    }
  });
  $('.flashcard_previous').click(function() {
    var count = parseInt($('.flashcard_count #flashcard_cnts').html());
    var max_count = parseInt($('.flashcard_count #flashcard_cntt').html());
    var newcnt = count-1;
    if (newcnt >= 1) {
      $('.sides_content').hide();
      $('#sides'+newcnt).fadeIn('slow'); 
      $('#flashcard_cnts').html(newcnt);
      flashcard_progress_bar(newcnt, max_count);
    }
  });
  $('.flashcard_content').click(function() {
    if ($('.flashcard_sidea').attr('checked')==true) {
      flashcard_sideb_flip();
      $('.flashcard_sidea').attr('checked', false);
      $('.flashcard_sideb').attr('checked', true);
    }
    else if ($('.flashcard_sideb').attr('checked')==true) {
      flashcard_sidea_flip();
      $('.flashcard_sideb').attr('checked', false);
      $('.flashcard_sidea').attr('checked', true);
    }  
  });
});
function flashcard_progress_bar(start, end) {
  var sec_width = 630/end;
  var line_width = start * sec_width;
  $('.flashcard_progress .flashcard_line').css('width', line_width);
}
function flashcard_sidea_flip() {
  $('.sideB').hide();
  $('.sideA').fadeIn('slow');
  $('.flashcard_flip').removeClass('flashcard_onlyimage'); 
  $('.flashcard_flip').addClass('flashcard_onlytext');  
}
function flashcard_sideb_flip() {
  $('.sideA').hide(); 
  $('.sideB').fadeIn('slow');
  $('.flashcard_flip').removeClass('flashcard_onlytext'); 
  $('.flashcard_flip').addClass('flashcard_onlyimage'); 
}