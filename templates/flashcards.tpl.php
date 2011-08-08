<?php 
$data = unserialize($node->quizlet_data);
$term_count = count($data);
 ?>
<div class="flashcard_board">
  <div class="flashcard_center">
    <div class="flashcard_top">
      <div class="flashcard_check">
        <label id="flashcard_sidea" style="display:none;"><input type="checkbox" name="sidea" class="flashcard_sidea"/> Side A First</label>
        <label id="flashcard_sideb" style="display:none;"><input type="checkbox" name="sideb" class="flashcard_sideb"/> Side B First</label>
        <label id="flashcard_bothside"><input type="checkbox" name="bothsides" class="flashcard_bothside" checked="checked"/> Both Sides</label>
      </div>
    </div>
    <div class="flashcard_display">
      <div class="flashcard_left"><span class="flashcard_previous">&nbsp;</span></div> 
      <div class="flashcard_content">
      
      <?php
      $i = 1;
      foreach ($data as $key => $value) {
        if ($value['1']) {
          $valueB = $value['1']; 
          $classB = '';
        }
        else {
          $valueB = $value[2]; 
          $classB = 'flashcard_img';
        }
        if ($i==1) {
          print '<div class="sides_content '. $classB .'" id="sides'.$i.'"><div class="sideA">'. $value['0'] .'</div>';  
          print '<div class="sideB">'. $valueB .'</div></div>';
        }
        else {
          print '<div class="sides_content '. $classB .'" id="sides'.$i.'" style="display:none;"><div class="sideA">'. $value['0'] .'</div>';  
          print '<div class="sideB">'. $valueB .'</div></div>';  
        }
        $i++;
      }
      ?>
      </div> 
      <div class="flashcard_right"><span class="flashcard_next">&nbsp;</span></div> 
    </div>  
    <div class="flashcard_bottom">
    <span class="flashcard_progress"><span class="flashcard_line">&nbsp;</span></span>
    <span class="flashcard_count"><span id="flashcard_cnts">1</span>/<span id="flashcard_cntt"><?php print $term_count; ?></span></span>
    </div>
  </div>
</div>