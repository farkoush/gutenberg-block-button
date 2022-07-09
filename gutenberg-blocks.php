<?php
/**
 * Plugin Name:       Gutenberg Blocks
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-blocks
 *
 * @package           create-block
 */


add_action('enqueue_block_editor_assets', 'editor_assets');
function editor_assets() {
	wp_enqueue_style ('gt-blocks-css1', plugin_dir_url(__FILE__)  . 'build/index.css');
}

add_action('init', 'adminAssets');
function adminAssets(){
	wp_register_script('gt-blocks-js', plugin_dir_url(__FILE__)  . 'build/index.js', array('wp-editor','wp-element','wp-blocks'));
	// wp_register_style('gt-blocks-css', plugin_dir_url(__FILE__)  . 'build/index.css');

	register_block_type("gutenberg-blocks/button",array(
		'render_callback' => 'render_callback_save',
		'editor_script' => 'gt-blocks-js',
		'editor_style'  => 'gt-blocks-css',
		// 'style'			=>  'gt-blocks-css'
	));
  
	function render_callback_save($attributes) {
		// print_r($attributes['target']); exit;
		ob_start(); ?>
			<div style="text-align: <?= $attributes['alignment'] ?>">
				<a
					href="<?= get_permalink($attributes['pageID']) ?>"
					class= 'button gt-button'
					target= "<?= $attributes['target']?>"
					style="
						background-color: <?= $attributes['bg_color']?>;
						color: <?= $attributes['text_color']?>;
					"
				>
					<?= $attributes['text']?>
				</a>
			</div>
		<?php return ob_get_clean();
	}
}