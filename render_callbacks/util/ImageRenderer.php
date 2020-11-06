<?php
class ImageRenderer {
  function renderImgByAttachmentId($id, $alt) {
    $srcset_min_size = 'tablogrid_400x0';
    $default_size = 'tablogrid_1024x0';
    $blurry_size = 'tablogrid_12x0';
    $img = wp_get_attachment_image_src($id, $default_size);
    $imgBlurry = wp_get_attachment_image_src($id, $blurry_size);
    $srcset = wp_get_attachment_image_srcset( $id, $srcset_min_size );

    $loadingSrc = $img[0];
    if (!empty($imgBlurry)) {
      $loadingSrc = $imgBlurry[0];
    }

    return '<img class="lazy" src="' . esc_url($loadingSrc) . '" '
        . 'data-src="' . esc_attr( $img[0] ).'" '
        . 'data-srcset="' . esc_attr( $srcset ).'" '
        . 'alt="' . $alt . '" />';
  }
}
