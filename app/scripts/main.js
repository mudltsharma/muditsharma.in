particlesJS('particles-js', {
  particles: {
    color: '#f1f1f1',
    color_random: true,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 0.75,
      anim: {
        enable: true,
        speed: 0.75,
        opacity_min: 0,
        sync: false
      }
    },
    size: 10,
    size_random: true,
    nb: 25,
    line_linked: {
      enable_auto: true,
      distance: 200,
      color: '#FAB5A3',
      opacity: 1,
      width: 0.5,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 0.5
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 500
    },
    detect_on: 'window', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: 0.85
    },
    events: {
      onresize: {
        enable: true,
        mode: 'bounce', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});


var dom = {
  contentItem : '.js-content-item',
  contentItemTitle : '.js-content-item-title',
  contentItemDesc : '.js-content-item-description'
}


$( document ).on( 'ready', function() {
  $( dom.contentItemTitle ).on( 'click', function() {
    $element   = $( this ).parents( dom.contentItem );
    var status = $element.attr( 'data-status' );
    if ( status === 'inactive' ) {
      $( dom.contentItem ).attr( 'data-status', 'inactive' );
      $element.attr( 'data-status', "active" );
    } else if ( status === 'default' ) {
      $( dom.contentItem ).attr( 'data-status', 'inactive' );
      $element.attr( 'data-status', 'active' );
    } else if ( status === 'active' ) {
      $element.attr( 'data-status', 'inactive' );
      $( dom.contentItem ).attr( 'data-status', 'default' );
    }
  })
})
