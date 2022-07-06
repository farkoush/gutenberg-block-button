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

// add_action('enqueue_block_editor_assets', 'adminAssets');
add_action('init', 'adminAssets');
function adminAssets(){
	wp_enqueue_script('gt-blocks', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-editor','wp-element','wp-blocks'));
	//OR 
	
	// wp_register_script('ournewblock', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks'));
	// wp_enqueue_script('ournewblock',  plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks'));
	// register_block_type("ourplugin/are-you",array(
	// 	'editor_script' => 'ournewblock',
	// 	'render_callback' => 'render_callback_save',
	// ));
}

function render_callback_save($attributes){
	$html= '<div>' . $attributes['skyColor'] . '!!!!! </div>';
	return $html;
}