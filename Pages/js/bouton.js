
$(document).ready(function(){
    $('body').append('<a href="#top" id="button" class="top_link" title="Revenir en haut de page">Revenir en haut</a>');
    $('.top_link').css({
        'position'				:	'fixed',
        'right'					:	'20px',
        'bottom'				:	'50px',
        'display'				:	'none',
        'padding'				:	'20px',
        'background'			:	'#0275d8',
        'color'			        :	'#fff',
        '-moz-border-radius'	:	'40px',
        '-webkit-border-radius'	:	'40px',
        'border-radius'			:	'40px',
        'opacity'				:	'0.9',
        'z-index'				:	'2000'
    });
    $(window).scroll(function(){
        posScroll = $(document).scrollTop();
        if(posScroll >=550)
            $('.top_link').fadeIn(600);
        else
            $('.top_link').fadeOut(600);
    });
});
