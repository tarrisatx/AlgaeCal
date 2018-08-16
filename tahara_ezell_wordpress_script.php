/*
Code will go inside functions.php file in my child theme
*/

<?php

//wordpress's dependency of jquery it loads
wp_enqueue_script( string $handle, string $src = '', array $deps = array(), string|bool|null $ver = false, bool $in_footer = false )

//Enque the external script as a depenency
wp_enqueue_script( 'external_script', get_template_directory_uri() .'/external_script.js', array('jquery'), null, true);

//This will allow me to run different versions of Jquery by running core in NoConflict Mode.
wp_register_script( 'jquery3.2.1', 'https://code.jquery.com/jquery-3.2.1.min.js' );
wp_add_inline_script( 'jquery3.2.1', 'var jQuery3_2_1 = $.noConflict(true);' );
wp_enqueue_script( 'plugin-javascript', plugins_url( 'js.js', __FILE__ ), array( 'jquery3.2.1' ) );


//jQuery function using a different version of Jquery.
if (!is_page()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue() {
   wp_deregister_script('jquery');
   wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . 
        "://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", false, null);
   wp_enqueue_script('jquery');
}

?>


