(function ($) {
  $(document).ready(function() {
    $('#edit-select-card').change(function() {
      if ($(this).val()) {
        window.location = $(this).val();
      }
    });
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
  });
})(jQuery);