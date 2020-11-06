<?php
class ImageRenderer {
  function renderImgByAttachmentId($id, $alt) {
    $srcset_min_size = 'tablogrid_640';
    $default_size = 'tablogrid_1024';
    $blurry_size = 'tablogrid_12';
    $img = wp_get_attachment_image_src($id, $default_size);
    $imgBlurry = wp_get_attachment_image_src($id, $blurry_size);
    $srcset = wp_get_attachment_image_srcset( $id, $srcset_min_size );

    $w = $img[1];
    $h = $img[2];

    $fallbackImg = '';

    if (!empty($imgBlurry)) {
      $loadingSrc = $imgBlurry[0];
      $fallbackImg = '<amp-img'
      . ' alt="' . $alt . '"'
      . ' fallback'
      . ' width="' . $w . '"'
      . ' height="' . $h . '"'
      . ' src="' . $loadingSrc . '"'
      . ' >';
    }

    return '<amp-img'
        . ' src="' . esc_attr( $img[0] ).'" '
        . ' srcset="' . esc_attr( $srcset ).'" '
        . ' alt="' . $alt . '"'
        . ' width="' . $w . '" height="' . $h . '"'
        . ' layout="responsive">'
        . $fallbackImg
        . '</amp-img>';
  }
}

