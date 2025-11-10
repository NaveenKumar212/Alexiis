type CustomizationData = {
  title: string;
  subtitle: string;
  colorScheme: string;
  companyName: string;
  description: string;
};

type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export function generateWordPressTheme(
  themeName: string,
  custom: CustomizationData,
  colors: ColorScheme,
  category: string
) {
  const themeSlug = themeName.toLowerCase().replace(/\s+/g, '-');
  const themeVersion = '1.0.0';

  const files: { [key: string]: string } = {
    'style.css': generateStyleCSS(themeName, themeSlug, themeVersion, custom),
    'index.php': generateIndexPHP(custom, colors, category),
    'header.php': generateHeaderPHP(custom, colors),
    'footer.php': generateFooterPHP(custom),
    'functions.php': generateFunctionsPHP(themeSlug, colors, custom, category),
    'page.php': generatePagePHP(),
    'single.php': generateSinglePHP(),
    'sidebar.php': generateSidebarPHP(),
    'searchform.php': generateSearchFormPHP(),
    'comments.php': generateCommentsPHP(),
    '404.php': generate404PHP(custom),
    'front-page.php': generateFrontPagePHP(custom, colors, category),
    'page-about.php': generateAboutPagePHP(custom, colors, category),
    'page-services.php': generateServicesPagePHP(custom, colors, category),
    'page-contact.php': generateContactPagePHP(custom, colors, category),
    'page-portfolio.php': generatePortfolioPagePHP(custom, colors, category),
    'page-pricing.php': generatePricingPagePHP(custom, colors, category),
    'page-team.php': generateTeamPagePHP(custom, colors, category),
    'screenshot.png': 'PLACEHOLDER',
    'README.md': generateReadmeMD(themeName, custom),
    'sample-content.xml': generateSampleContentXML(custom, category),
    'assets/css/custom.css': generateCustomCSS(colors),
    'assets/js/script.js': generateScriptJS(),
    'template-parts/content.php': generateContentPHP(),
    'template-parts/content-page.php': generateContentPagePHP(),
    'inc/custom-header.php': generateCustomHeaderPHP(),
    'inc/customizer.php': generateCustomizerPHP(colors),
    'inc/template-functions.php': generateTemplateFunctionsPHP(),
    'inc/sample-data.php': generateSampleDataPHP(custom, category),
  };

  return files;
}

function generateStyleCSS(themeName: string, themeSlug: string, version: string, custom: CustomizationData): string {
  return `/*
Theme Name: ${themeName}
Theme URI: https://example.com/${themeSlug}
Author: SiteForge
Author URI: https://siteforge.com
Description: ${custom.description}
Version: ${version}
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: ${themeSlug}
Tags: custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready, responsive-layout, modern

This theme, like WordPress, is licensed under the GPL.
*/

/* Normalize & Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

/* WordPress Core */
.alignnone {
  margin: 5px 20px 20px 0;
}

.aligncenter,
div.aligncenter {
  display: block;
  margin: 5px auto;
}

.alignright {
  float: right;
  margin: 5px 0 20px 20px;
}

.alignleft {
  float: left;
  margin: 5px 20px 20px 0;
}

.wp-caption {
  max-width: 100%;
}

.wp-caption-text {
  text-align: center;
  font-size: 0.9em;
  color: #666;
}

.sticky {
  background: #f9f9f9;
}

.gallery-caption {
  display: block;
}

.bypostauthor {
  font-weight: bold;
}

/* Screen Reader Text */
.screen-reader-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

/* Loading */
#page {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}`;
}

function generateIndexPHP(custom: CustomizationData, colors: ColorScheme, category: string): string {
  return `<?php
/**
 * The main template file
 *
 * @package ${custom.companyName.replace(/\s+/g, '_')}
 */

get_header();
?>

<main id="primary" class="site-main">
  <div class="container">
    <?php if ( have_posts() ) : ?>

      <header class="page-header">
        <?php if ( is_home() && ! is_front_page() ) : ?>
          <h1 class="page-title"><?php single_post_title(); ?></h1>
        <?php else : ?>
          <h1 class="page-title"><?php echo esc_html__( '${custom.title}', '${custom.companyName.toLowerCase().replace(/\s+/g, '-')}' ); ?></h1>
          <p class="page-subtitle"><?php echo esc_html__( '${custom.subtitle}', '${custom.companyName.toLowerCase().replace(/\s+/g, '-')}' ); ?></p>
        <?php endif; ?>
      </header>

      <div class="posts-wrapper">
        <?php
        while ( have_posts() ) :
          the_post();
          get_template_part( 'template-parts/content', get_post_type() );
        endwhile;

        the_posts_navigation();
        ?>
      </div>

    <?php else : ?>
      <p><?php esc_html_e( 'No posts found.', '${custom.companyName.toLowerCase().replace(/\s+/g, '-')}' ); ?></p>
    <?php endif; ?>
  </div>
</main>

<?php
get_sidebar();
get_footer();`;
}

function generateHeaderPHP(custom: CustomizationData, colors: ColorScheme): string {
  return `<?php
/**
 * The header for our theme
 *
 * @package ${custom.companyName.replace(/\s+/g, '_')}
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
  <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', '${custom.companyName.toLowerCase().replace(/\s+/g, '-')}' ); ?></a>

  <header id="masthead" class="site-header">
    <div class="container">
      <div class="site-branding">
        <?php
        if ( has_custom_logo() ) :
          the_custom_logo();
        else :
        ?>
          <h1 class="site-title">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
              <?php bloginfo( 'name' ); ?>
            </a>
          </h1>
          <?php
          $description = get_bloginfo( 'description', 'display' );
          if ( $description || is_customize_preview() ) :
          ?>
            <p class="site-description"><?php echo $description; ?></p>
          <?php endif; ?>
        <?php endif; ?>
      </div>

      <nav id="site-navigation" class="main-navigation">
        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
          <span class="menu-icon"></span>
          <?php esc_html_e( 'Menu', '${custom.companyName.toLowerCase().replace(/\s+/g, '-')}' ); ?>
        </button>
        <?php
        wp_nav_menu(
          array(
            'theme_location' => 'primary',
            'menu_id'        => 'primary-menu',
            'fallback_cb'    => false,
          )
        );
        ?>
      </nav>
    </div>
  </header>`;
}

function generateFooterPHP(custom: CustomizationData): string {
  return `<?php
/**
 * The template for displaying the footer
 *
 * @package ${custom.companyName.replace(/\s+/g, '_')}
 */
?>

  <footer id="colophon" class="site-footer">
    <div class="container">
      <div class="footer-widgets">
        <?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
          <div class="footer-widget-area">
            <?php dynamic_sidebar( 'footer-1' ); ?>
          </div>
        <?php endif; ?>

        <?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
          <div class="footer-widget-area">
            <?php dynamic_sidebar( 'footer-2' ); ?>
          </div>
        <?php endif; ?>

        <?php if ( is_active_sidebar( 'footer-3' ) ) : ?>
          <div class="footer-widget-area">
            <?php dynamic_sidebar( 'footer-3' ); ?>
          </div>
        <?php endif; ?>
      </div>

      <div class="site-info">
        <p>&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', '${custom.companyName.toLowerCase().replace(/\s+/g, '-')}' ); ?></p>
        <p>
          <?php
          printf( esc_html__( 'Powered by %s', '${custom.companyName.toLowerCase().replace(/\s+/g, '-')}' ), '<a href="https://wordpress.org/">WordPress</a>' );
          ?>
        </p>
      </div>
    </div>
  </footer>
</div>

<?php wp_footer(); ?>
</body>
</html>`;
}

function generateFunctionsPHP(themeSlug: string, colors: ColorScheme, custom: CustomizationData, category: string): string {
  return `<?php
/**
 * Theme functions and definitions
 *
 * @package ${themeSlug}
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

define( 'THEME_VERSION', '1.0.0' );

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function ${themeSlug}_setup() {
  load_theme_textdomain( '${themeSlug}', get_template_directory() . '/languages' );

  add_theme_support( 'automatic-feed-links' );
  add_theme_support( 'title-tag' );
  add_theme_support( 'post-thumbnails' );
  add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
  add_theme_support( 'customize-selective-refresh-widgets' );
  add_theme_support( 'custom-logo', array( 'height' => 250, 'width' => 250, 'flex-width' => true, 'flex-height' => true ) );
  add_theme_support( 'custom-background', array( 'default-color' => 'ffffff' ) );
  add_theme_support( 'custom-header', array( 'default-image' => '', 'width' => 1920, 'height' => 500, 'flex-height' => true ) );
  add_theme_support( 'align-wide' );
  add_theme_support( 'responsive-embeds' );

  register_nav_menus( array(
    'primary' => esc_html__( 'Primary Menu', '${themeSlug}' ),
    'footer'  => esc_html__( 'Footer Menu', '${themeSlug}' ),
  ) );
}
add_action( 'after_setup_theme', '${themeSlug}_setup' );

/**
 * Set the content width in pixels.
 */
function ${themeSlug}_content_width() {
  $GLOBALS['content_width'] = apply_filters( '${themeSlug}_content_width', 1200 );
}
add_action( 'after_setup_theme', '${themeSlug}_content_width', 0 );

/**
 * Register widget areas.
 */
function ${themeSlug}_widgets_init() {
  register_sidebar( array(
    'name'          => esc_html__( 'Sidebar', '${themeSlug}' ),
    'id'            => 'sidebar-1',
    'description'   => esc_html__( 'Add widgets here.', '${themeSlug}' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ) );

  for ( $i = 1; $i <= 3; $i++ ) {
    register_sidebar( array(
      'name'          => sprintf( esc_html__( 'Footer %d', '${themeSlug}' ), $i ),
      'id'            => 'footer-' . $i,
      'description'   => esc_html__( 'Add widgets here.', '${themeSlug}' ),
      'before_widget' => '<section id="%1$s" class="widget %2$s">',
      'after_widget'  => '</section>',
      'before_title'  => '<h2 class="widget-title">',
      'after_title'   => '</h2>',
    ) );
  }
}
add_action( 'widgets_init', '${themeSlug}_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function ${themeSlug}_scripts() {
  wp_enqueue_style( '${themeSlug}-style', get_stylesheet_uri(), array(), THEME_VERSION );
  wp_enqueue_style( '${themeSlug}-custom', get_template_directory_uri() . '/assets/css/custom.css', array(), THEME_VERSION );

  wp_enqueue_script( '${themeSlug}-script', get_template_directory_uri() . '/assets/js/script.js', array( 'jquery' ), THEME_VERSION, true );

  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }
}
add_action( 'wp_enqueue_scripts', '${themeSlug}_scripts' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';`;
}

function generatePagePHP(): string {
  return `<?php
/**
 * The template for displaying all pages
 */

get_header();
?>

<main id="primary" class="site-main">
  <div class="container">
    <?php
    while ( have_posts() ) :
      the_post();
      get_template_part( 'template-parts/content', 'page' );

      if ( comments_open() || get_comments_number() ) :
        comments_template();
      endif;
    endwhile;
    ?>
  </div>
</main>

<?php
get_footer();`;
}

function generateSinglePHP(): string {
  return `<?php
/**
 * The template for displaying all single posts
 */

get_header();
?>

<main id="primary" class="site-main">
  <div class="container">
    <?php
    while ( have_posts() ) :
      the_post();
      get_template_part( 'template-parts/content', get_post_type() );

      the_post_navigation(
        array(
          'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'textdomain' ) . '</span> <span class="nav-title">%title</span>',
          'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'textdomain' ) . '</span> <span class="nav-title">%title</span>',
        )
      );

      if ( comments_open() || get_comments_number() ) :
        comments_template();
      endif;
    endwhile;
    ?>
  </div>
</main>

<?php
get_sidebar();
get_footer();`;
}

function generateSidebarPHP(): string {
  return `<?php
/**
 * The sidebar containing the main widget area
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
  return;
}
?>

<aside id="secondary" class="widget-area">
  <?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside>`;
}

function generateSearchFormPHP(): string {
  return `<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <label>
    <span class="screen-reader-text"><?php echo _x( 'Search for:', 'label' ); ?></span>
    <input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
  </label>
  <button type="submit" class="search-submit"><?php echo esc_html_x( 'Search', 'submit button' ); ?></button>
</form>`;
}

function generateCommentsPHP(): string {
  return `<?php
/**
 * The template for displaying comments
 */

if ( post_password_required() ) {
  return;
}
?>

<div id="comments" class="comments-area">
  <?php if ( have_comments() ) : ?>
    <h2 class="comments-title">
      <?php
      $comment_count = get_comments_number();
      if ( '1' === $comment_count ) {
        printf( esc_html__( 'One comment', 'textdomain' ) );
      } else {
        printf( esc_html( _n( '%1$s comment', '%1$s comments', $comment_count, 'textdomain' ) ), number_format_i18n( $comment_count ) );
      }
      ?>
    </h2>

    <ol class="comment-list">
      <?php
      wp_list_comments( array(
        'style'      => 'ol',
        'short_ping' => true,
      ) );
      ?>
    </ol>

    <?php the_comments_navigation(); ?>

  <?php endif; ?>

  <?php comment_form(); ?>
</div>`;
}

function generate404PHP(custom: CustomizationData): string {
  return `<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header();
?>

<main id="primary" class="site-main">
  <div class="container">
    <section class="error-404 not-found">
      <header class="page-header">
        <h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'textdomain' ); ?></h1>
      </header>

      <div class="page-content">
        <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try a search?', 'textdomain' ); ?></p>
        <?php get_search_form(); ?>
      </div>
    </section>
  </div>
</main>

<?php
get_footer();`;
}

function generateReadmeMD(themeName: string, custom: CustomizationData): string {
  return `# ${themeName}

${custom.description}

## Description

A modern, responsive WordPress theme designed for ${custom.companyName}.

## Installation

1. Upload the theme folder to /wp-content/themes/
2. Activate the theme through the 'Themes' menu in WordPress
3. Configure the theme via Appearance > Customize

## Features

- Responsive design
- Custom logo support
- Custom menus
- Widget areas
- Custom header
- Custom background
- Post thumbnails
- Translation ready
- SEO optimized

## Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher

## Support

For support, please visit https://siteforge.com

## License

This theme is licensed under the GPL v2 or later.

## Credits

Generated by SiteForge - Professional Website Generator`;
}

function generateCustomCSS(colors: ColorScheme): string {
  return `/* Custom Theme Styles */

:root {
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
  --text-color: ${colors.text};
  --background-color: ${colors.background};
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.site-header {
  background: var(--background-color);
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 0;
}

.site-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-title a {
  color: var(--primary-color);
  font-size: 28px;
  font-weight: bold;
}

/* Navigation */
.main-navigation ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

.main-navigation a {
  color: var(--text-color);
  transition: color 0.3s;
}

.main-navigation a:hover {
  color: var(--primary-color);
}

.menu-toggle {
  display: none;
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

/* Content */
.site-main {
  padding: 60px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 48px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.page-subtitle {
  font-size: 20px;
  color: #666;
}

/* Posts */
.posts-wrapper {
  display: grid;
  gap: 40px;
}

.entry-title {
  font-size: 32px;
  margin-bottom: 15px;
}

.entry-title a {
  color: var(--text-color);
  transition: color 0.3s;
}

.entry-title a:hover {
  color: var(--primary-color);
}

.entry-meta {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

.entry-content {
  line-height: 1.8;
}

/* Buttons */
button,
.button,
input[type="submit"] {
  background: var(--primary-color);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover,
.button:hover,
input[type="submit"]:hover {
  background: var(--secondary-color);
}

/* Sidebar */
.widget-area {
  padding: 40px;
  background: #f9f9f9;
}

.widget {
  margin-bottom: 40px;
}

.widget-title {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--primary-color);
}

/* Footer */
.site-footer {
  background: #1a1a1a;
  color: white;
  padding: 60px 0 20px;
  margin-top: 60px;
}

.footer-widgets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.site-info {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid #333;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .main-navigation ul {
    display: none;
    flex-direction: column;
  }

  .main-navigation.toggled ul {
    display: flex;
  }

  .footer-widgets {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 32px;
  }
}`;
}

function generateScriptJS(): string {
  return `(function($) {
  'use strict';

  // Mobile menu toggle
  $('.menu-toggle').on('click', function() {
    $('.main-navigation').toggleClass('toggled');
    $(this).attr('aria-expanded', $('.main-navigation').hasClass('toggled'));
  });

  // Smooth scroll for anchor links
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });

  // Add active class to current menu item
  var currentUrl = window.location.href;
  $('.main-navigation a').each(function() {
    if (this.href === currentUrl) {
      $(this).addClass('current-menu-item');
    }
  });

})(jQuery);`;
}

function generateContentPHP(): string {
  return `<?php
/**
 * Template part for displaying posts
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <?php
    if ( is_singular() ) :
      the_title( '<h1 class="entry-title">', '</h1>' );
    else :
      the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
    endif;
    ?>

    <div class="entry-meta">
      <?php echo get_the_date(); ?> | <?php the_author(); ?>
    </div>
  </header>

  <?php if ( has_post_thumbnail() ) : ?>
    <div class="post-thumbnail">
      <?php the_post_thumbnail(); ?>
    </div>
  <?php endif; ?>

  <div class="entry-content">
    <?php
    the_content();
    wp_link_pages();
    ?>
  </div>

  <footer class="entry-footer">
    <?php
    $categories_list = get_the_category_list( ', ' );
    if ( $categories_list ) {
      printf( '<span class="cat-links">Posted in %s</span>', $categories_list );
    }

    $tags_list = get_the_tag_list( '', ', ' );
    if ( $tags_list ) {
      printf( '<span class="tags-links">Tagged %s</span>', $tags_list );
    }
    ?>
  </footer>
</article>`;
}

function generateContentPagePHP(): string {
  return `<?php
/**
 * Template part for displaying page content
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
  </header>

  <?php if ( has_post_thumbnail() ) : ?>
    <div class="post-thumbnail">
      <?php the_post_thumbnail(); ?>
    </div>
  <?php endif; ?>

  <div class="entry-content">
    <?php
    the_content();
    wp_link_pages();
    ?>
  </div>
</article>`;
}

function generateCustomHeaderPHP(): string {
  return `<?php
/**
 * Custom Header functionality
 */

function custom_header_setup() {
  add_theme_support( 'custom-header', apply_filters( 'custom_header_args', array(
    'default-image'      => '',
    'default-text-color' => '000',
    'width'              => 1920,
    'height'             => 500,
    'flex-height'        => true,
    'wp-head-callback'   => 'custom_header_style',
  ) ) );
}
add_action( 'after_setup_theme', 'custom_header_setup' );

function custom_header_style() {
  $header_text_color = get_header_textcolor();

  if ( ! has_header_image() && $header_text_color === get_theme_support( 'custom-header', 'default-text-color' ) ) {
    return;
  }

  ?>
  <style type="text/css">
    <?php if ( has_header_image() ) : ?>
      .site-header {
        background-image: url(<?php header_image(); ?>);
        background-size: cover;
        background-position: center;
      }
    <?php endif; ?>

    <?php if ( ! display_header_text() ) : ?>
      .site-title,
      .site-description {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
      }
    <?php else : ?>
      .site-title a,
      .site-description {
        color: #<?php echo esc_attr( $header_text_color ); ?>;
      }
    <?php endif; ?>
  </style>
  <?php
}`;
}

function generateCustomizerPHP(colors: ColorScheme): string {
  return `<?php
/**
 * Theme Customizer
 */

function theme_customize_register( $wp_customize ) {
  // Add color scheme section
  $wp_customize->add_section( 'theme_colors', array(
    'title'    => __( 'Color Scheme', 'textdomain' ),
    'priority' => 30,
  ) );

  // Primary color
  $wp_customize->add_setting( 'primary_color', array(
    'default'   => '${colors.primary}',
    'transport' => 'refresh',
  ) );

  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'primary_color', array(
    'label'    => __( 'Primary Color', 'textdomain' ),
    'section'  => 'theme_colors',
    'settings' => 'primary_color',
  ) ) );

  // Secondary color
  $wp_customize->add_setting( 'secondary_color', array(
    'default'   => '${colors.secondary}',
    'transport' => 'refresh',
  ) );

  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_color', array(
    'label'    => __( 'Secondary Color', 'textdomain' ),
    'section'  => 'theme_colors',
    'settings' => 'secondary_color',
  ) ) );
}
add_action( 'customize_register', 'theme_customize_register' );

function theme_customize_css() {
  ?>
  <style type="text/css">
    :root {
      --primary-color: <?php echo get_theme_mod( 'primary_color', '${colors.primary}' ); ?>;
      --secondary-color: <?php echo get_theme_mod( 'secondary_color', '${colors.secondary}' ); ?>;
    }
  </style>
  <?php
}
add_action( 'wp_head', 'theme_customize_css' );`;
}

function generateTemplateFunctionsPHP(): string {
  return `<?php
/**
 * Custom template functions
 */

if ( ! function_exists( 'posted_on' ) ) :
  function posted_on() {
    $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
    if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
      $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
    }

    $time_string = sprintf( $time_string,
      esc_attr( get_the_date( DATE_W3C ) ),
      esc_html( get_the_date() ),
      esc_attr( get_the_modified_date( DATE_W3C ) ),
      esc_html( get_the_modified_date() )
    );

    $posted_on = sprintf(
      esc_html_x( 'Posted on %s', 'post date', 'textdomain' ),
      '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
    );

    echo '<span class="posted-on">' . $posted_on . '</span>';
  }
endif;

if ( ! function_exists( 'posted_by' ) ) :
  function posted_by() {
    $byline = sprintf(
      esc_html_x( 'by %s', 'post author', 'textdomain' ),
      '<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
    );

    echo '<span class="byline"> ' . $byline . '</span>';
  }
endif;`;
}

function generateFrontPagePHP(custom: CustomizationData, colors: ColorScheme, category: string): string {
  return `<?php
/**
 * Template Name: Front Page
 * The template for displaying the home page
 */

get_header();
?>

<main id="primary" class="site-main front-page">
  <!-- Hero Section -->
  <section class="hero-section" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); padding: 120px 20px; text-align: center; color: white;">
    <div class="container">
      <h1 class="hero-title" style="font-size: 56px; font-weight: bold; margin-bottom: 20px;"><?php echo esc_html( get_theme_mod( 'hero_title', '${custom.title}' ) ); ?></h1>
      <p class="hero-subtitle" style="font-size: 24px; margin-bottom: 40px; opacity: 0.9;"><?php echo esc_html( get_theme_mod( 'hero_subtitle', '${custom.subtitle}' ) ); ?></p>
      <a href="#services" class="cta-button" style="display: inline-block; background: white; color: ${colors.primary}; padding: 15px 40px; border-radius: 8px; font-weight: bold; text-decoration: none;">Get Started</a>
    </div>
  </section>

  <!-- Features/Services Section -->
  <section class="features-section" style="padding: 80px 20px;">
    <div class="container">
      <h2 style="text-align: center; font-size: 42px; margin-bottom: 60px; color: ${colors.primary};">Our Services</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
        <?php
        $services = array(
          array('title' => 'Service 1', 'description' => 'Comprehensive solution for your needs'),
          array('title' => 'Service 2', 'description' => 'Expert guidance and support'),
          array('title' => 'Service 3', 'description' => 'Cutting-edge technology')
        );
        foreach ($services as $index => $service) :
        ?>
          <div style="background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
            <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: ${colors.primary}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">
              <?php echo $index + 1; ?>
            </div>
            <h3 style="font-size: 24px; margin-bottom: 15px;"><?php echo esc_html( $service['title'] ); ?></h3>
            <p style="color: #666;"><?php echo esc_html( $service['description'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section style="background: ${colors.primary}; color: white; padding: 80px 20px; text-align: center;">
    <div class="container">
      <h2 style="font-size: 36px; margin-bottom: 20px;">Ready to Get Started?</h2>
      <p style="font-size: 20px; margin-bottom: 30px; opacity: 0.9;">Contact us today for a consultation</p>
      <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" style="display: inline-block; background: white; color: ${colors.primary}; padding: 15px 40px; border-radius: 8px; font-weight: bold; text-decoration: none;">Contact Us</a>
    </div>
  </section>
</main>

<?php
get_footer();`;
}

function generateAboutPagePHP(custom: CustomizationData, colors: ColorScheme, category: string): string {
  return `<?php
/**
 * Template Name: About Page
 * The template for displaying the about page
 */

get_header();
?>

<main id="primary" class="site-main about-page">
  <section style="padding: 80px 20px;">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 48px; margin-bottom: 30px; color: ${colors.primary};">About ${custom.companyName}</h1>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 80px;">
        <div>
          <h2 style="font-size: 32px; margin-bottom: 20px;">Our Story</h2>
          <p style="font-size: 18px; line-height: 1.8; color: #666; margin-bottom: 20px;">
            ${custom.companyName} was founded with a vision to provide exceptional services to our clients.
            We are committed to excellence and innovation in everything we do.
          </p>
          <p style="font-size: 18px; line-height: 1.8; color: #666;">
            Our team of dedicated professionals works tirelessly to ensure that every project exceeds expectations.
          </p>
        </div>
        <div style="background: ${colors.primary}; border-radius: 12px; min-height: 400px;"></div>
      </div>

      <h2 style="font-size: 36px; text-align: center; margin-bottom: 60px;">Our Values</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px;">
        <?php
        $values = array(
          array('title' => 'Excellence', 'description' => 'We strive for excellence in everything we do'),
          array('title' => 'Innovation', 'description' => 'We embrace new technologies and methodologies'),
          array('title' => 'Integrity', 'description' => 'We maintain the highest ethical standards'),
          array('title' => 'Customer Focus', 'description' => 'Our clients success is our success')
        );
        foreach ($values as $value) :
        ?>
          <div style="text-align: center; padding: 30px;">
            <div style="width: 60px; height: 60px; margin: 0 auto 20px; background: ${colors.secondary}; border-radius: 50%;"></div>
            <h3 style="font-size: 22px; margin-bottom: 15px; color: ${colors.primary};"><?php echo esc_html( $value['title'] ); ?></h3>
            <p style="color: #666;"><?php echo esc_html( $value['description'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();`;
}

function generateServicesPagePHP(custom: CustomizationData, colors: ColorScheme, category: string): string {
  return `<?php
/**
 * Template Name: Services Page
 */

get_header();
?>

<main id="primary" class="site-main services-page">
  <section style="padding: 80px 20px;">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 48px; text-align: center; margin-bottom: 20px; color: ${colors.primary};">Our Services</h1>
      <p style="font-size: 20px; text-align: center; color: #666; margin-bottom: 60px; max-width: 800px; margin-left: auto; margin-right: auto;">
        ${custom.description}
      </p>

      <div style="display: grid; gap: 60px;">
        <?php
        $services = array(
          array('title' => 'Premium Service', 'description' => 'Comprehensive solution tailored to your needs', 'features' => array('Feature 1', 'Feature 2', 'Feature 3')),
          array('title' => 'Consulting', 'description' => 'Expert guidance from industry professionals', 'features' => array('Strategy', 'Implementation', 'Support')),
          array('title' => 'Ongoing Support', 'description' => '24/7 support to keep you running smoothly', 'features' => array('Monitoring', 'Maintenance', 'Updates'))
        );
        $index = 0;
        foreach ($services as $service) :
          $reverse = $index % 2 !== 0;
          $index++;
        ?>
          <div style="display: grid; grid-template-columns: <?php echo $reverse ? '1fr 1fr' : '1fr 1fr'; ?>; gap: 40px; align-items: center;">
            <?php if (!$reverse) : ?>
              <div style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); border-radius: 12px; height: 300px;"></div>
            <?php endif; ?>
            <div>
              <h2 style="font-size: 32px; margin-bottom: 20px; color: ${colors.primary};"><?php echo esc_html( $service['title'] ); ?></h2>
              <p style="font-size: 18px; color: #666; margin-bottom: 30px;"><?php echo esc_html( $service['description'] ); ?></p>
              <ul style="list-style: none; padding: 0;">
                <?php foreach ($service['features'] as $feature) : ?>
                  <li style="padding: 10px 0; color: #333;">
                    <span style="color: ${colors.primary}; margin-right: 10px;">✓</span>
                    <?php echo esc_html( $feature ); ?>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>
            <?php if ($reverse) : ?>
              <div style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); border-radius: 12px; height: 300px;"></div>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();`;
}

function generateContactPagePHP(custom: CustomizationData, colors: ColorScheme, category: string): string {
  return `<?php
/**
 * Template Name: Contact Page
 */

get_header();
?>

<main id="primary" class="site-main contact-page">
  <section style="padding: 80px 20px;">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 48px; text-align: center; margin-bottom: 20px; color: ${colors.primary};">Get In Touch</h1>
      <p style="font-size: 20px; text-align: center; color: #666; margin-bottom: 60px;">
        Have a question? We'd love to hear from you.
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px;">
        <div>
          <h2 style="font-size: 28px; margin-bottom: 30px;">Contact Information</h2>

          <div style="margin-bottom: 30px;">
            <h3 style="font-size: 18px; color: ${colors.primary}; margin-bottom: 10px;">Address</h3>
            <p style="color: #666;">123 Business Street<br>City, State 12345</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h3 style="font-size: 18px; color: ${colors.primary}; margin-bottom: 10px;">Email</h3>
            <p style="color: #666;"><a href="mailto:info@<?php echo esc_attr( str_replace(' ', '', strtolower('${custom.companyName}') ) ); ?>.com" style="color: ${colors.primary};">info@<?php echo esc_attr( str_replace(' ', '', strtolower('${custom.companyName}') ) ); ?>.com</a></p>
          </div>

          <div style="margin-bottom: 30px;">
            <h3 style="font-size: 18px; color: ${colors.primary}; margin-bottom: 10px;">Phone</h3>
            <p style="color: #666;">(555) 123-4567</p>
          </div>

          <div>
            <h3 style="font-size: 18px; color: ${colors.primary}; margin-bottom: 10px;">Hours</h3>
            <p style="color: #666;">Monday - Friday: 9am - 6pm<br>Saturday - Sunday: Closed</p>
          </div>
        </div>

        <div>
          <form method="post" action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" style="background: #f9f9f9; padding: 40px; border-radius: 12px;">
            <div style="margin-bottom: 25px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Name *</label>
              <input type="text" name="contact_name" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px;">
            </div>

            <div style="margin-bottom: 25px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Email *</label>
              <input type="email" name="contact_email" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px;">
            </div>

            <div style="margin-bottom: 25px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Subject *</label>
              <input type="text" name="contact_subject" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px;">
            </div>

            <div style="margin-bottom: 25px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Message *</label>
              <textarea name="contact_message" required rows="5" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; resize: vertical;"></textarea>
            </div>

            <button type="submit" style="background: ${colors.primary}; color: white; padding: 15px 40px; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; width: 100%;">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();`;
}

function generatePortfolioPagePHP(custom: CustomizationData, colors: ColorScheme, category: string): string {
  return `<?php
/**
 * Template Name: Portfolio Page
 */

get_header();
?>

<main id="primary" class="site-main portfolio-page">
  <section style="padding: 80px 20px;">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 48px; text-align: center; margin-bottom: 20px; color: ${colors.primary};">Our Work</h1>
      <p style="font-size: 20px; text-align: center; color: #666; margin-bottom: 60px;">
        Explore our portfolio of successful projects
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px;">
        <?php
        for ($i = 1; $i <= 6; $i++) :
        ?>
          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s;">
            <div style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); height: 250px; display: flex; align-items: center; justify-center; color: white; font-size: 48px; font-weight: bold;">
              <?php echo $i; ?>
            </div>
            <div style="padding: 25px; background: white;">
              <h3 style="font-size: 22px; margin-bottom: 10px;">Project <?php echo $i; ?></h3>
              <p style="color: #666; margin-bottom: 15px;">A showcase of our exceptional work and dedication to quality.</p>
              <a href="#" style="color: ${colors.primary}; font-weight: 600; text-decoration: none;">View Details →</a>
            </div>
          </div>
        <?php endfor; ?>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();`;
}

function generatePricingPagePHP(custom: CustomizationData, colors: ColorScheme, category: string): string {
  return `<?php
/**
 * Template Name: Pricing Page
 */

get_header();
?>

<main id="primary" class="site-main pricing-page">
  <section style="padding: 80px 20px;">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 48px; text-align: center; margin-bottom: 20px; color: ${colors.primary};">Pricing Plans</h1>
      <p style="font-size: 20px; text-align: center; color: #666; margin-bottom: 60px;">
        Choose the perfect plan for your needs
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <?php
        $plans = array(
          array('name' => 'Basic', 'price' => '49', 'features' => array('Feature 1', 'Feature 2', 'Feature 3', 'Email Support')),
          array('name' => 'Professional', 'price' => '99', 'features' => array('Everything in Basic', 'Feature 4', 'Feature 5', 'Priority Support'), 'popular' => true),
          array('name' => 'Enterprise', 'price' => '199', 'features' => array('Everything in Pro', 'Feature 6', 'Feature 7', 'Dedicated Support'))
        );
        foreach ($plans as $plan) :
          $is_popular = isset($plan['popular']) && $plan['popular'];
        ?>
          <div style="background: white; border-radius: 12px; padding: 40px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); <?php echo $is_popular ? 'border: 3px solid ' . $colors->primary . ';' : ''; ?> position: relative;">
            <?php if ($is_popular) : ?>
              <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: ${colors.primary}; color: white; padding: 5px 20px; border-radius: 20px; font-size: 14px; font-weight: bold;">
                Most Popular
              </div>
            <?php endif; ?>
            <h3 style="font-size: 28px; margin-bottom: 20px;"><?php echo esc_html( $plan['name'] ); ?></h3>
            <div style="margin-bottom: 30px;">
              <span style="font-size: 48px; font-weight: bold; color: ${colors.primary};">$<?php echo esc_html( $plan['price'] ); ?></span>
              <span style="color: #666;">/month</span>
            </div>
            <ul style="list-style: none; padding: 0; margin-bottom: 30px;">
              <?php foreach ($plan['features'] as $feature) : ?>
                <li style="padding: 12px 0; border-bottom: 1px solid #eee;"><?php echo esc_html( $feature ); ?></li>
              <?php endforeach; ?>
            </ul>
            <a href="#" style="display: block; background: <?php echo $is_popular ? $colors->primary : 'transparent'; ?>; color: <?php echo $is_popular ? 'white' : $colors->primary; ?>; border: 2px solid ${colors.primary}; padding: 15px; border-radius: 8px; font-weight: bold; text-decoration: none;">
              Get Started
            </a>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();`;
}

function generateTeamPagePHP(custom: CustomizationData, colors: ColorScheme, category: string): string {
  return `<?php
/**
 * Template Name: Team Page
 */

get_header();
?>

<main id="primary" class="site-main team-page">
  <section style="padding: 80px 20px;">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 48px; text-align: center; margin-bottom: 20px; color: ${colors.primary};">Our Team</h1>
      <p style="font-size: 20px; text-align: center; color: #666; margin-bottom: 60px;">
        Meet the talented people behind ${custom.companyName}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px;">
        <?php
        $team = array(
          array('name' => 'John Doe', 'position' => 'CEO & Founder'),
          array('name' => 'Jane Smith', 'position' => 'Chief Technology Officer'),
          array('name' => 'Mike Johnson', 'position' => 'Head of Design'),
          array('name' => 'Sarah Williams', 'position' => 'Marketing Director')
        );
        foreach ($team as $member) :
        ?>
          <div style="text-align: center;">
            <div style="width: 200px; height: 200px; margin: 0 auto 20px; background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); border-radius: 50%;"></div>
            <h3 style="font-size: 24px; margin-bottom: 10px; color: ${colors.primary};"><?php echo esc_html( $member['name'] ); ?></h3>
            <p style="color: #666; margin-bottom: 15px;"><?php echo esc_html( $member['position'] ); ?></p>
            <div style="display: flex; justify-content: center; gap: 15px;">
              <a href="#" style="color: ${colors.primary};">LinkedIn</a>
              <a href="#" style="color: ${colors.primary};">Twitter</a>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();`;
}

function generateSampleContentXML(custom: CustomizationData, category: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- WordPress eXtended RSS file - Sample Content for ${custom.companyName} -->
<!-- Instructions: Import this file via Tools > Import > WordPress in your admin panel -->
<rss version="2.0">
  <channel>
    <title>${custom.companyName}</title>
    <description>${custom.description}</description>
    <item>
      <title>Welcome to ${custom.companyName}</title>
      <content:encoded><![CDATA[
        <p>${custom.subtitle}</p>
        <p>We are excited to have you here. Explore our services and discover how we can help you achieve your goals.</p>
      ]]></content:encoded>
      <wp:post_type>post</wp:post_type>
      <wp:status>publish</wp:status>
    </item>
  </channel>
</rss>`;
}

function generateSampleDataPHP(custom: CustomizationData, category: string): string {
  return `<?php
/**
 * Sample data and content for theme setup
 */

function create_sample_pages() {
  // Check if pages already exist
  if (get_page_by_path('about')) {
    return;
  }

  // Create About page
  $about_page = array(
    'post_title'    => 'About',
    'post_content'  => 'Learn more about ${custom.companyName} and our mission.',
    'post_status'   => 'publish',
    'post_type'     => 'page',
    'page_template' => 'page-about.php'
  );
  wp_insert_post($about_page);

  // Create Services page
  $services_page = array(
    'post_title'    => 'Services',
    'post_content'  => 'Discover our comprehensive range of services.',
    'post_status'   => 'publish',
    'post_type'     => 'page',
    'page_template' => 'page-services.php'
  );
  wp_insert_post($services_page);

  // Create Contact page
  $contact_page = array(
    'post_title'    => 'Contact',
    'post_content'  => 'Get in touch with us today.',
    'post_status'   => 'publish',
    'post_type'     => 'page',
    'page_template' => 'page-contact.php'
  );
  wp_insert_post($contact_page);

  // Create Portfolio page
  $portfolio_page = array(
    'post_title'    => 'Portfolio',
    'post_content'  => 'View our portfolio of work.',
    'post_status'   => 'publish',
    'post_type'     => 'page',
    'page_template' => 'page-portfolio.php'
  );
  wp_insert_post($portfolio_page);

  // Create Pricing page
  $pricing_page = array(
    'post_title'    => 'Pricing',
    'post_content'  => 'Choose the perfect plan for your needs.',
    'post_status'   => 'publish',
    'post_type'     => 'page',
    'page_template' => 'page-pricing.php'
  );
  wp_insert_post($pricing_page);

  // Create Team page
  $team_page = array(
    'post_title'    => 'Team',
    'post_content'  => 'Meet our talented team.',
    'post_status'   => 'publish',
    'post_type'     => 'page',
    'page_template' => 'page-team.php'
  );
  wp_insert_post($team_page);

  // Set front page
  $home_page = get_page_by_path('home');
  if (!$home_page) {
    $home_id = wp_insert_post(array(
      'post_title'    => 'Home',
      'post_content'  => '',
      'post_status'   => 'publish',
      'post_type'     => 'page'
    ));
    update_option('page_on_front', $home_id);
    update_option('show_on_front', 'page');
  }
}
add_action('after_switch_theme', 'create_sample_pages');`;
}
