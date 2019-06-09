
jQuery(document).ready(function(){
    let isscrolleddown=false,isscrolledup= false;
    // landing page first animation
    // TweenMax.from(".animate-reveal", 2 , {opacity:0});
    TweenMax.from("#section1", 2 , {opacity:0});  
    if($(window).width()>768)
    {
        $(window).bind('mousewheel', function(e){

            if(e.originalEvent.wheelDeltaY > 0)
            {
                if(!isscrolledup){
                    $('body').addClass('stop-scrolling')
                    // jQuery('.section2-elements').fadeOut('fast');
                    jQuery('#section2').hide();
                    // jQuery('.section1-elements').css('display','block');
                    jQuery('#section1').css('display','block');
                    TweenMax.from("#section1", 0.6 , {opacity:0, x: -1000, ease: Power2.easeOut});  
                    isscrolledup = true;
                    isscrolleddown = false;
                }
                $('body').removeClass('stop-scrolling')
            }
            else if(e.originalEvent.wheelDeltaY < 0)
            {
                if(!isscrolleddown){
                    $('body').addClass('stop-scrolling')
                    // jQuery('.section1-elements').fadeOut('fast');
                    jQuery('#section1').hide();
                    jQuery('#section2').css('display','block');
                    // jQuery('.section2-elements').css('display','block');
                    TweenMax.from("#section2", 0.6 , {opacity:0, x: 1000, ease: Power2.easeOut});  
                    isscrolleddown = true;
                    isscrolledup= false;
                }
                $('body').addClass('stop-scrolling')
    
            }else{
                //nothing on horizontal scroll
            }
        });
       
    }else{
        jQuery('#slide-out').css('width',jQuery(window).width()+'px');
    }
    
    // materialize initialize navbar
    $(".sidenav").sidenav({
        edge: 'right'
    });
    var instance = M.Sidenav.getInstance($(".sidenav"));

    jQuery('#sidebar-close').on('click',function(){
        instance.close();
    });
        
});
