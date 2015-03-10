$('.carousel-sync').carousel('cycle');
$('.carousel-sync').on('click', '.carousel-control[data-slide]', function (ev) {
	ev.preventDefault();
    $('.carousel-sync').carousel($(this).data('slide'));
});
$('.carousel-sync').on('mouseover', function(ev) {
  	ev.preventDefault();
    $('.carousel-sync').carousel('pause');
});
$('.carousel-sync').on('mouseleave', function(ev) {
  	ev.preventDefault();
    $('.carousel-sync').carousel('cycle');
});

$('#myCarousel').bind('slid.bs.carousel', function (e)
        {
          
            var $this = $(this);

            $this.children('.carousel-control').show();

            if ($('.carousel-inner .item:last').hasClass('active'))
            {
               $('#myCarousel').carousel('pause');
                $this.children('.right.carousel-control').hide();
            } else if ($('.carousel-inner .item:first').hasClass('active'))
            {
                $this.children('.left.carousel-control').hide();
            }
        });