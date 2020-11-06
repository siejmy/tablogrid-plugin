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

function register_thumb_sizes() {
	add_image_size( 'tablogrid_12', 12 );
	add_image_size( 'tablogrid_640', 640 );
	add_image_size( 'tablogrid_768', 768 );
	add_image_size( 'tablogrid_1024', 1024 );
	add_image_size( 'tablogrid_1366', 1366 );
	add_image_size( 'tablogrid_1600', 1600 );
	add_image_size( 'tablogrid_1920', 1920 );
	add_image_size( 'tablogrid_2200', 2200 );
}

function register_block_type_row_ltb() {
	register_block_type( 'siejmy/tablogrid-row-ltb', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
		'style'         => 'siejmy-tablogrid-block',
	) );
}

function register_block_type_row_tbr() {
	register_block_type( 'siejmy/tablogrid-row-tbr', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
		'style'         => 'siejmy-tablogrid-block',
	) );
}

function register_block_type_row_uno() {
	register_block_type( 'siejmy/tablogrid-row-uno', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
		'style'         => 'siejmy-tablogrid-block',
	) );
}

function register_block_type_row_duo() {
	register_block_type( 'siejmy/tablogrid-row-duo', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
		'style'         => 'siejmy-tablogrid-block',
	) );
}

function register_block_type_row_midline() {
	register_block_type( 'siejmy/tablogrid-row-midline', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
		'style'         => 'siejmy-tablogrid-block',
	) );
}

function register_block_type_column() {
	register_block_type( 'siejmy/tablogrid-column', array(
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
		'style'         => 'siejmy-tablogrid-block',
	) );
}

function register_block_type_client_post() {
	register_block_type( 'siejmy/tablogrid-client-post', array(
		'render_callback' => 'siejmy_tablogrid_client_post_render_callback',
		'editor_script' => 'siejmy-tablogrid-block-editor',
		'editor_style'  => 'siejmy-tablogrid-block-editor',
		'style'         => 'siejmy-tablogrid-block',
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

	$editor_css = 'build/index.css';
	wp_register_style(
		'siejmy-tablogrid-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'siejmy-tablogrid-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type_row_ltb();
	register_block_type_row_tbr();
	register_block_type_row_uno();
	register_block_type_row_duo();
	register_block_type_row_midline();
	register_block_type_column();
	register_block_type_client_post();

	register_thumb_sizes();
}
add_action( 'init', 'create_block_tablogrid_block_init' );
