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
            $('.after_span').css('left', pos.left + 80).css('top', pos.top - mar/2);
            $('#grad_1').css('width', $('.after_span').width()).css('top', pos.top - mar/2).css('left', pos.left + 82);
            $('#grad_2').css('width', $('.after_span').width()).css('top', pos.top + mar/2 + 19).css('left', pos.left + 82);
        },
            function () {
                $('.after_span').remove();
                $('#grad_1').remove();
                $('#grad_2').remove();
            });
    var image;

        $('.main_article_img').click(function () {
            image = this;
            if ($(window).width() > 1150){
                $(this).toggleClass('active_img');
                $('#end').toggleClass('close');
                $('body').toggleClass('body_close');
            }
            if ($(window).width() < 1000){
                $(this).toggleClass('active_img');
                $('#end').toggleClass('close');
                $('body').toggleClass('body_close');
                if($('meta[content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"]').length === 1){
                    $('meta[name="viewport"]').remove();
                    $('head').append('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=100,user-scalable=yes">');
                } else{
                    $('meta[name="viewport"]').remove();
                    $('head').append('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">');

                }
            }


        });
    $('#end').click(function () {
            if ($(window).width() > 1150){
                $(image).toggleClass('active_img');
                $('#end').toggleClass('close');
                $('body').toggleClass('body_close');
            }
            if ($(window).width() < 1000){
                $(image).toggleClass('active_img');
                $('#end').toggleClass('close');
                $('body').toggleClass('body_close');
                if($('meta[content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"]').length === 1){
                    $('meta[name="viewport"]').remove();
                    $('head').append('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=100,user-scalable=yes">');
                } else{
                    $('meta[name="viewport"]').remove();
                    $('head').append('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">');

                }
            }
    });



    });
