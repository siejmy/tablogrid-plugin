<?php


function siejmy_tablogrid_client_twitter_render_callback( $block_attributes, $content ) {
  require_once( ABSPATH . 'wp-content/plugins/siejmycommon-plugin/classes/ImageRenderer.php');
  wp_enqueue_style('siejmy-tablogrid-client-twitter');

  $twitterProfile = isset($block_attributes['twitterProfile']) ? $block_attributes['twitterProfile'] : '';
  $bgImageId = isset($block_attributes['bgImageId']) ? $block_attributes['bgImageId'] : '';
  $scaleMode = isset($block_attributes['scaleMode']) ? $block_attributes['scaleMode'] : 'medium';

  $imgRenderer = new ImageRenderer();
  return $imgRenderer->renderImageHero(array(
    'mediaId' => $bgImageId,
    'alt' => 'Tło do twittera @' . $twitterProfile,
    'elementId' => 'tablogrid_last_tweet_' . $twitterProfile,
    'tag' => 'div',
    'caption' => renderTwitterHeroContent($twitterProfile),
    'cssClass' => 'tablogrid_client tablogrid_last_tweet scale_' . $scaleMode,
  ));
}

function renderTwitterHeroContent($twitterProfile) {
  return '<div class="last_tweet_content">'
    . '<div><amp-twitter
    width="3"
    height="2"
    layout="responsive"
    data-timeline-source-type="profile"
    data-timeline-screen-name="' . $twitterProfile . '"
    data-chrome="noheader,nofooter,noborders,transparent"
    data-tweet-limit="1"
  >
  </amp-twitter></div>'
    . '</div>';
}

