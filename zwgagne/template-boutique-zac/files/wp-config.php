<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/home/zwgagne/public_html/boutique/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'zwgagne_wp_zacboutique' );

/** MySQL database username */
define( 'DB_USER', 'zwgagne_wp_zacadmin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'nmDp1?o6Y8Ajngec' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '#2kHbJ*-bP&+4J6tKcW76nK]UAFoFdS#X9:/P!/*aIL4+-[S4(E4YKdU%Y6D2_fg');
define('SECURE_AUTH_KEY', 'Yvn-qES~3y*-70N#DvvZ/U5)0vs+JEV#7[A5r8~v2D68c6zfc3S8-N4N/!72p15(');
define('LOGGED_IN_KEY', '0[5J+@JQ/0%3)s7jEYVACxsvQh:)2F4_&8PR~E2k&Vgfv@mK)d8%w4TM2Hdml&WB');
define('NONCE_KEY', '#Zlicw&iy1!e18Woth58iRm(6OJ6c0u-/U~|M|)K)z7XS:g[CRH56[Z~Jjzuv8z4');
define('AUTH_SALT', ')S37i9[ZTG1g5U|%_t736005xveb1*YNT29[oAKy81gJg/0c*PXpUWfqm-0(BXVK');
define('SECURE_AUTH_SALT', '&&C&p@5!!K/q07pO#4qn(h8EQ!-Sz3Sl)fD]FFKOum-aVGMEt3-*2!+AG9Y1:1%M');
define('LOGGED_IN_SALT', '+JI~B;&q1AmE93nw9685!_;zAQ1w;Nnl92[I3rd4!+~&)6KLW)agsnhl+To[JaV2');
define('NONCE_SALT', '~y8MmqmdE[zw7IP09PrlSc@JMs+H82c-@Wr1d7(4f2!13sH8tC1J70bx@u9%~:5A');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpzac_';


define('WP_ALLOW_MULTISITE', true);
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
