<?php
/*
 * @wordpress-plugin
 * Plugin Name: Billies Image Popup View
 * Description: Thumbnail images viewer. Shortcode is "[insert_billies_image_popup_view]". 大きな画像を表示したい箇所で、ショートコードを貼り付けてください。
 * Version: 0.1
 * Author: Seiichi Nukayama
 * Author URI: http://www.billies-works.com/
 */

function billies_image_popup_view_addfiles() {
	wp_enqueue_script('popup_view_js', plugins_url('popup_view.js', __FILE__), array(), '1.0', true);
	wp_localize_script('popup_view_js', 'view_vars', array(
		'path' => plugins_url('', __FILE__),
	));
  wp_enqueue_style('popup_view_css', plugins_url('popup_view.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'billies_image_popup_view_addfiles');

/**
 * 画面出力
 */
/*
function popup_dispImage() {
	ob_start();
*/ ?>
<!-- <div class="image-large-area">

     <figure id="image-large">
	 <figcaption id="figcap"></figcaption>
     </figure>

     </div> -->
<?php
/*
return ob_get_clean();
}
add_shortcode('insert_billies_image_popup_view', 'popup_dispImage');
*/

/* 修正時刻: Sun Aug 15 09:53:10 2021 */
