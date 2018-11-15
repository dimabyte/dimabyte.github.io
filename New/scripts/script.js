$(function() {

        $('.src_button').click(function(){
            $('.src').toggleClass('active_src');
        });
        $('.End_src').click(function(){
            $('.src').toggleClass('active_src');
        });


        $('.main_article a').hover(function () {
            let text = $(this).children('strong').html();
            $(this).after('<div class="mob_grad" id="grad_3"></div><div class="grad" id="grad_1"></div><div class="after_span"><p>' + text + '</p></div><div class="grad" id="grad_2"></div><div class="mob_grad" id="grad_4"></div>');

            let pos = $(this).position();

            let mar = $('.after_span').height();
            let wid = $('.after_span').width();
            if ($(window).width() > 1000){

                $('.after_span').css('left', pos.left + 80).css('top', pos.top - mar/2 - 16);
                $('#grad_1').css('width', $('.after_span').width()).css('top', pos.top - mar/2 - 16).css('left', pos.left + 86);
                $('#grad_2').css('width', $('.after_span').width()).css('top', pos.top + mar/2 + 27).css('left', pos.left + 86);
                $('#grad_3').css('display', 'none');
                $('#grad_4').css('display', 'none');
            } else {
                console.log($(window).height() / 2, $(this).offset().top - $(window).scrollTop());
                if ($(window).height() / 2 > $(this).offset().top - $(window).scrollTop()){
                    $('.after_span').css('left', '4%').css('top', pos.top + 40).addClass('after_bot');
                    $('#grad_1').css('top', pos.top + 34).css('left', pos.left + $(this).width() / 2);
                    $('#grad_3').css('width', $('.after_span').height()).css('top', pos.top + mar - 31).css('left', pos.left + wid / 2 + 26);
                    $('#grad_4').css('width', $('.after_span').height()).css('top', pos.top + mar - 31).css('left', pos.left - wid / 2 - 17);
                    $('#grad_2').css('display', 'none');
                } else {
                    $('.after_span').css('left', '4%').css('top', pos.top - mar - 55).addClass('after_top');
                    $('#grad_2').css('top', pos.top - 16).css('left', pos.left + $(this).width() / 2);
                    $('#grad_1').css('display', 'none');
                    $('#grad_3').css('width', $('.after_span').height()).css('top', pos.top - mar + 60).css('left', pos.left + wid / 2 + 26).css('transform', 'rotate(-90deg)');
                    $('#grad_4').css('width', $('.after_span').height()).css('top', pos.top - mar + 60).css('left', pos.left - wid / 2 - 17).css('transform', 'rotate(-90deg)');
                }

            }

        },
            function () {
                $('.after_span').remove().removeClass('after_top').removeClass('after_bot');
                $('#grad_1').remove();
                $('#grad_2').remove();
                $('#grad_3').remove();
                $('#grad_4').remove();

            });



    var image;

        $('.main_article_img').click(function () {
            if ($(this).index('.main_article_img') === 0){
            } else {
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
