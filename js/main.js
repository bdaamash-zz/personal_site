$(document).ready(function(){
    var previousScroll = 0,
        headerOrgOffset = $('.container').height();

    $('nav').height(headerOrgOffset);

    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();

        if (currentScroll > 200) {
            $('nav').fadeIn('slow', function() {
                 $( ".navbar-brand" ).animate({
                    top: "0",
                  }, '1000', 'swing');

            });

        } 
        else {                        
            $('nav').fadeOut('slow', function(){
                 $( ".navbar-brand" ).css('top','-40px');

            });

        }
        
        startBarsAnimation();


    });

    // Check if the section has came into the view
    function isElementInViewport(elem) {
        var $elem = $(elem);

        // Get the scroll position of the page.
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // Get the position of the element on the page.
        var elemTop = Math.round( $elem.offset().top );
        var elemBottom = elemTop + $elem.height();

        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }
    
    // function to start animation of the skill bars
    function startBarsAnimation() {
        var $elem = $('#skills');

        // If the animation has already been started
        if ($elem.hasClass('start')) return;

        if (isElementInViewport($elem)) {
            // Start the animation
            $elem.addClass('start');
            
            //Skill bars
            $(".skill_bar > span").each(function() {
                //force the width to 0, then animate to the percentage in the data-skill-value attribute
                $(this)
                    .width(0)
                    .animate({
                        width: $(this).data("skill-value")
                    }, 1200);
            });


             $(".awesome_skill_bar > span").each(function() {
                //force the width to 0, then animate to the percentage in the data-skill-value attribute
                $(this)
                    .width(0)
                    .animate({
                        width: $(this).data("skill-value")
                    }, 1200);
            });
        }
    }


    

    // Animating to sections
    $('a.sectionNav').bind('click',function(e){
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top -50)
        }, 1500);

        e.preventDefault();
    });

});
            