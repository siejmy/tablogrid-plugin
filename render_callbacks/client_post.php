<?php
function siejmy_tablogrid_client_post_render_callback( $block_attributes, $content ) {
    require_once( ABSPATH . 'wp-content/plugins/siejmycommon-plugin/classes/ImageRenderer.php');
    require_once( ABSPATH . 'wp-content/plugins/siejmycommon-plugin/classes/HeroCaptionRenderer.php');
    wp_enqueue_style('siejmy-tablogrid-client-post');

    $out = '<article class="tablogrid_client tablopost">';
    if(empty($block_attributes['postId'])) {
      $out .= '<span>Wybierz numer ID wpisu w edytorze strony</span>';
    }
    else {
      $out .= renderPost($block_attributes['postId']);
    }
    $out .= '</article>';
    return  $out;
}

function renderPost($post_id) {
    $post = get_post($post_id);
    if (empty($post)) {
      return '<span>Wpis "' . $post_id . '" nie istnieje</span>';
    }

    return renderPostContent($post);
  }

  function renderPostContent($post) {
    $imgRenderer = new ImageRenderer();
    $captionRenderer = new HeroCaptionRenderer();

    $permalink = get_permalink($post);
    $mediaId     = get_post_thumbnail_id($post);
    $alt = $post->post_title;

    return $imgRenderer->renderImageHero(array(
      'mediaId' => $mediaId,
      'cssClass' => 'featpost_a',
      'alt' => $alt,
      'href' => $permalink,
      'elementId' => 'tablopost_' . $post->ID,
      'caption' => $captionRenderer->render($post, array(
        'titleTag' => 'h3',
      )),
    ));
  }
