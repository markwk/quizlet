<div id="quizlet_list">
  <?php print $backlink .'  | '.$savelink .'<br>'; ?>
  <?php print '<b>'. t('Title') .' : </b>'. $title; ?>
  <?php if (!empty($description)) {
          print '<br><b>'. t('Description') .' : </b><br>'. $description;
        }
   ?>  
  <?php print '<br><b>'. t('Term Count') .' : </b>'. $term_count; ?>  
  <?php print '<div class="quizet_list"><div class="quizlet_terms_title"><b>'. t('Terms') .' : </b><a href="javascript:void(0);" id="quizlet_images">Hide Images</a></div>'. $terms.'</div>'; ?>  
</div>
<?php print quizlet_powered_by(); ?>