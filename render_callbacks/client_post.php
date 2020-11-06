<?php
require_once(dirname(__FILE__) . '/util/ImageRenderer.php');

function siejmy_tablogrid_client_post_render_callback( $block_attributes, $content ) {
    $post_id =$block_attributes['postId'];

    $out = '<div class="tablopost">';
          if(empty($post_id)) {
            $out .= '<span>Wybierz numer ID wpisu edytorze strony</span>';
          }
          else {
            $out .= renderPost($post_id);
          }
        $out .= '</div>';
        return  $out;
}

function renderPost($post_id) {
    $post = get_post($post_id);
    if (empty($post)) {
      return '<span>Wpis "' . $post_id . '" nie istnieje</span>';
    }

    return renderPostContent($post);

    return '' . renderImg($post) . '';
  }

  function renderPostContent($post) {
    $permalink = get_permalink($post);
    return '
    <a class="featpost_a" href="' . $permalink . '">
        ' . renderImg($post) . '
        <div class="caption">
          ' . renderTag($post) . '
          <h2>' . $post->post_title . '</h2>
          <div class="subline">
            <span class="author">' . getAuthorName($post) . '</span>
          </div>
        </div>
      </a>
      ';
  }

  function renderImg($post) {
    $id     = get_post_thumbnail_id($post);
    $alt = $post->post_title;
    $imgRenderer = new ImageRenderer();
    return $imgRenderer->renderImgByAttachmentId($id, $alt);
  }

  function renderTag($post) {
    $mainCategoryName = getMainCategoryName($post);
    if(empty($mainCategoryName)) {
      return '';
    }
    return '<div class="tag">' . $mainCategoryName . '</div>';
  }

  function getMainCategoryName($post) {
    $categories = get_the_category($post->ID);
    if(count($categories) == 0) {
      return '';
    }
    return $categories[0]->name;
  }

  function getAuthorName($post) {
    return get_the_author_meta('display_name', $post->post_author);
  }
