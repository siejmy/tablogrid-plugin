<?php
/**
 * Plugin Name:     Tablogrid
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     tablogrid
 *
 * @package         siejmy
 */

require_once dirname(__FILE__) . '/render_callbacks/client_post.php';
require_once dirname(__FILE__) . '/render_callbacks/client_twitter.php';

function register_style_time_versioned($name, $localPath) {
	$dir = dirname( __FILE__ );
	wp_register_style(
		$name,
		plugins_url( $localPath, __FILE__ ),
		array(),
		filemtime( "$dir/$localPath" )
	);
}

function register_block_type_row_ltb() {
	register_block_type( 'siejmy/tablogrid-row-ltb', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function register_block_type_row_tbr() {
	register_block_type( 'siejmy/tablogrid-row-tbr', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function register_block_type_row_uno() {
	register_block_type( 'siejmy/tablogrid-row-uno', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function register_block_type_row_duo() {
	register_block_type( 'siejmy/tablogrid-row-duo', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function register_block_type_row_midline() {
	register_block_type( 'siejmy/tablogrid-row-midline', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function register_block_type_column() {
	register_block_type( 'siejmy/tablogrid-column', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function register_block_type_client_post() {
	register_block_type( 'siejmy/tablogrid-client-post', array(
		'render_callback' => 'siejmy_tablogrid_client_post_render_callback',
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function register_block_type_client_twitter() {
	register_block_type( 'siejmy/tablogrid-client-twitter', array(
		'render_callback' => 'siejmy_tablogrid_client_twitter_render_callback',
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function register_block_type_lead() {
	register_block_type( 'siejmy/lead', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
	) );
}

function create_block_tablogrid_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "siejmy/tablogrid" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'siejmy-tablogrid-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	register_style_time_versioned('siejmy-tablogrid-block-editor', 'build/editor.css');
	register_style_time_versioned('siejmy-tablogrid-client-post', 'build/client-post.css');
	register_style_time_versioned('siejmy-tablogrid-client-twitter', 'build/client-twitter.css');

	register_block_type_row_ltb();
	register_block_type_row_tbr();
	register_block_type_row_uno();
	register_block_type_row_duo();
	register_block_type_row_midline();
	register_block_type_column();
	register_block_type_client_post();
	register_block_type_client_twitter();
	register_block_type_lead();
}
add_action( 'init', 'create_block_tablogrid_block_init' );
