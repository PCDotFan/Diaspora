<?php
/*
Template Name: Archive
*/
?>

<?php get_header(); ?>

<div id="single" class="page">

    <div id="top">
        <a class="icon-icon" href="javascript:history.back()">
            <img width="24" src="<?php echo get_template_directory_uri(); ?>/static/72.png" />
        </a>
    </div>

    <div class="section">
	<div class="images">
	</div><div class="article">
        <div>

        <div class="content">
        <?php zww_archives_list(); ?>
        </div>
        

        </div>
        </div>
    </div>

</div>

</body>
</html><!--
