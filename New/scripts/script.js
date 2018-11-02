$.afterlag(function() {

    $(function() {

        $('.src_button').click(function(){
            $('.src').toggleClass('active_src');
        });
        $('.End_src').click(function(){
            $('.src').toggleClass('active_src');
        });


        $('.main_article a').hover(function () {
            let text = $(this).children('strong').text();
            let pos = $(this).position();
            $(this).after('<div class="grad" id="grad_1"></div><div class="after_span">' + text + '</div><div class="grad" id="grad_2"></div>');
            let mar = $('.after_span').height();
            $('.after_span').css('left', pos.left + 110).css('top', pos.top - mar/2);
            $('#grad_1').css('width', $('.after_span').width()).css('top', pos.top - mar/2).css('left', pos.left + 112);
            $('#grad_2').css('width', $('.after_span').width()).css('top', pos.top + mar/2 + 19).css('left', pos.left + 112);
        },
            function () {
                $('.after_span').remove();
                $('#grad_1').remove();
                $('#grad_2').remove();
            });


        $('.main_article_img').click(function () {
            if ($(window).width() > 1150){

                $(this).toggleClass('active_img');
                $('#end').toggleClass('close');
                $('body').toggleClass('body_close');
            }
            if ($(window).width() < 1000){
                $(this).toggleClass('active_img');
                $('#end').toggleClass('close');
                $('body').toggleClass('body_close');
            }


        });
        $('meta[name="viewport"]').remove();



    });
});
