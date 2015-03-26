$( document ).ready( function() {


    var settings = {
        mailchimpFormURL : '//entro.us9.list-manage.com/subscribe/post?u=780f10a1095d86b824955470e&amp;id=a8b0fe22da'
    };

    var dom = {

    };



    function submitForm() {
        var $form = $('form');

        if ( $form.length > 0 ) {
            $('form input[type="submit"]').bind('click', function ( event ) {
                if ( event ) event.preventDefault();
                // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
                if ( validate_input($form) ) { register($form); }
            });
        }
    }



    /**
     * [register description]
     * @param  {[type]} $form [description]
     * @return {[type]}       [description]
     */
    function register($form) {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache       : false,
            dataType    : 'json',
            contentType: "application/json; charset=utf-8",
            error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
            success     : function(data) {
                if (data.result != "success") {
                    // Something went wrong, do something to notify the user. maybe alert(data.msg);
                } else {
                    // It worked, carry on...
                }
            }
        });
    }




particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circles',
      opacity: 1,
      size: 100,
      size_random: true,
      nb: 25,
      line_linked: {
        enable_auto: true,
        distance: 200,
        color: '#fff',
        opacity: 1,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 100,
          rotateY: 100
        }
      },
      anim: {
        enable: true,
        speed: 1
      }
    },
    interactivity: {
      enable: false,
      mouse: {
        distance: 50
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: 0.5
      },
      events: {
        onclick: {
          push_particles: {
            enable: true,
            nb: 400
          }
        }
      }
    },
    retina_detect: true
});


});

