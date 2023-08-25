<?php

// Enqueues child theme assets
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_assets', 11 );
function my_theme_enqueue_assets() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css' );
    wp_enqueue_script( 'child-script', get_stylesheet_directory_uri() . '/script.js', array('jquery') );
}

// Disables XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Add 3rd party scripts to head
add_action('wp_head', 'additional_scripts_to_head');
function additional_scripts_to_head(){
    ?>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZRJ064KN1J"></script>

    <!-- Possibly the azure CDN? Not sure where this came from. 23.08.15-AL -->
    <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"></script>
    <?php
};
