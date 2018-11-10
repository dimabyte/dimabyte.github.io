$(function() {

        // Выставление разной высоты окна для разных экранов
        function Size_header() {
            var wind = $(window).width();
            if(wind < '600') {
                $('.sphere').attr("src", "img/spheremin.png")
            } else {
                $('.sphere').attr("src", "img/spheremin.png")
            }
            if (wind >= '1750') {
                $('.preloader').css('height', '750px');
                $('.preload_back').css('height', '750px');
            }
            if (wind >= '1580' && wind < '1750' ) {
                $('.preloader').css('height', '720px');
                $('.preload_back').css('height', '720px');
            }
            if (wind >= '1500' && wind < '1580' ) {
                $('.preloader').css('height', '690px');
                $('.preload_back').css('height', '690px');
            }
            if (wind >= '1315' && wind < '1500' ) {
                $('.preloader').css('height', '610px');
                $('.preload_back').css('height', '610px');
            }
            if (wind >= '1000' && wind < '1315' ) {
                $('.preloader').css('height', '430px');
                $('.preload_back').css('height', '430px');
            }
            if (wind >= '0' && wind < '1000' ) {
                $('.preloader').css('height', window.innerHeight);
                $('.preload_back').css('height', window.innerHeight);
            }

        }
        // Расположение элементовв в хэдере для моб и деск
        function Preload_or() {
            $('.Tech_news > *:nth-child(1)').addClass('last_tech_article');
            if ($(window).width() < 1018){
                $('.Tech_news > *:nth-child(2)').removeClass('last_tech_article');
            } else {
                $('.Tech_news > *:nth-child(2)').addClass('last_tech_article');
            }

        }
        Preload_or();

        $('.burger').click(function () {
            $('.mobile_menu').toggleClass('active_mobile_menu');
            if ($('.menu_btns').attr('class').indexOf('active_menu_btns') !== -1){
                setTimeout(function () {
                    $('.menu_btns').css('position', 'static');
                },350)
            } else {
                $('.menu_btns').css('position', 'fixed');
            }
            $('.menu_btns').toggleClass('active_menu_btns');
            $(this).toggleClass('burger_active');
            $('.logo').toggleClass('active_logo');
            $('.menu_btns a').toggleClass('active_a');
            $('body').toggleClass('active_body');
        });

        const inst = document.getElementById("burg").getBoundingClientRect()['top'];


    window.onscroll = function() {
        let scrolling = window.pageYOffset || document.documentElement.scrollTop;
        if ($(window).width() < 1000) {
            if (scrolling > inst + 20) {
                $('.burger').addClass('burger_scrollable');
                $('.logo').addClass('scrollable_logo');
                $('.mobile_menu').addClass('scrollable_mobile_menu').addClass('switch');
                setTimeout(function () {
                    $('.mobile_menu').removeClass('switch');
                }, 100)
                } else {
                $('.burger').removeClass('burger_scrollable');
                $('.logo').removeClass('scrollable_logo');
                $('.mobile_menu').removeClass('scrollable_mobile_menu').addClass('switch');
                setTimeout(function () {
                    $('.mobile_menu').removeClass('switch');
                }, 100)
            }
        }
    };











        $('.preloader').css('height', window.innerHeight);
        $('.preloader').css('transition', '1s' +
            '');
        check_little();
    $(window).on('resize', check_little);

        //Анимациция проявления и увелечения текста и сферы
        function sfera_grow_more() {
            if ($(window).width() <= '800') {
                $('.sphere').css('transform', 'scale(0.9)').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
                $('.text_first').css('opacity', '0.7').css('font-size', '16px').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
                $('#first_circle').css('opacity', '0.6').css('-webkit-filter:', 'blur(0px)');
                $('#second_circle').css('opacity', '0.9').css('-webkit-filter:', 'blur(0px)');
                $('#third_circle').css('opacity', '0.9');
                $('#fifth_circle').css('opacity', '1');
                $('#sixth_circle').css('opacity', '0.9');
                $('#seventh_circle').css('opacity', '0.9');
            } else {
                if ($(window).width() <= '1370') {
                    $('.sphere').css('transform', 'scale(1.5)').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
                } else{
                    $('.sphere').css('transform', 'scale(1)').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
                }
                $('.text_first').css('opacity', '0.7').css('font-size', '23px').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
                $('.circles').css('opacity', '0.3').css('filter', 'blur(3px)').css('-webkit-filter:', 'blur(3px)');
                $('#forth_circle').css('opacity', '0.5');
                $('#fifth_circle').css('opacity', '0.9').css('-webkit-filter:', 'blur(0px)');
                $('#sixth_circle').css('opacity', '0.7');
                $('#seventh_circle').css('opacity', '0.5');
                $('#eight_circle').css('opacity', '0.7');
            }
        }
        // Небольшое уменьшение сферы
        function sfera_grow_norm() {
            if ($(window).width() <= '800') {
                $('.sphere').css('transform', 'scale(0.8)');
            } else {
                $('.sphere').css('width', '17%');
            }
        }
        function transe() {
            $('.sphere').css('transition', '2s');
            $('.preloader').css('transition', '2s');
        }
        // Исчезноение сферы и текста
        function sfera_little() {
            $('.sphere').css('opacity', '0').css('filter', 'blur(500px)');
            $('.text_first').css('opacity', '0').css('filter', 'blur(100px)');
            $('.circles').css('opacity', '0').css('filter', 'blur(10px)').css('-webkit-filter:', 'blur(10px)');
            $('.preload_back').css('opacity', '1');
        }

        // Появление всех элементов
        function preloader_Little() {



            $('body').css('background-color', '#fcfcfc');
            $('.main').css('opacity', '1').css('display', 'flex');
            $('footer').css('opacity', '1').css('display', 'flex');
            $('.more_news').css('opacity', '1').css('display', 'flex');
            $('.news').css('opacity', '1').css('display', 'flex');
            $('.Girl').css('display', 'block');
            $('.city').css('display', 'block');
            $('.preloader').css('transition', '1.5s');
            $('.bottom_text').css('display', 'flex');
            Size_header();
            // Для мобильных параметры хэдера не меняется при измении размера окна
            if( navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i))
            {

            } else {
                $(window).on('resize', Size_header);
            }


        }
        // Полное исчезновение сферы
        function sfera_none() {
            $('.sphere').remove();
            $('.text_first').remove();
            $('.circles').remove();
            $(window).on('resize', Preload_or);

        }
        // Проявление основной части хэдера
        function header_show(){
            $('.Girl').css('opacity', '0.7').css('filter', 'blur(0px)').css('transform', 'translateY(0)');
            $('.city').css('opacity', '0.7').css('filter', 'blur(0px)').css('transform', 'translateY(0)');
            $('.and').css('opacity', '1');
        }




        // Проявление лого
        function logo_show(){
            $('.logo').css('opacity', '1');
            $('.desk_logo').css('opacity', '1');
            $('.Girl').css('transition', '1s');
            $('.city').css('transition', '1s');
            $('#menu').css('opacity', '1');
            $('.mobile_menu').css('opacity', '1');
        }
        // Проявление сферы без буквы 'и'
        function Sphere_show(){
            if ($(window).width() >= '370') {
                $('.I').css('height', '44px').css('width', '44px');
            } else{
                $('.I').css('height', '24px').css('width', '24px');
            }
            if ($(window).width() >= '850' && $(window).width() <= '1015')  {
                setTimeout(function () {
                    $('.top_headers').css('opacity', '1');
                    setTimeout(function () {
                        $('.till_end').css('opacity', '1');
                        $('.kurs').css('opacity', '1');
                    }, 100);
                }, 800);

            }
            if ($(window).width() > '1016')  {
                setTimeout(function () {
                    crowdsale_icons();
                    $('.top_headers').css('opacity', '1');
                    setTimeout(function () {
                        $('.till_end').css('opacity', '1');
                        $('.kurs').css('opacity', '1');
                    }, 100);
                }, 800);

            }
        }


        // Проявление буквы "и" и точек
        function Litera(){
            $('.I > p').css('opacity', '1');
            $('#Dot_1').css('opacity', '1');
            $('#Dot_2').css('opacity', '1');
            $('#Dot_2 div:nth-child(1)').css('opacity', '1');
            $('#Dot_1 div:nth-child(1)').css('opacity', '1');
            $('.Girl').css('opacity', '1');
            $('.city').css('opacity', '1');

        }
        function second_dots() {
            $('#Dot_2 div:nth-child(2)').css('opacity', '1');
            $('#Dot_1 div:nth-child(2)').css('opacity', '1');
        }
        function third_dots() {
            $('#Dot_2 div:nth-child(3)').css('opacity', '1');
            $('#Dot_1 div:nth-child(3)').css('opacity', '1');
        }
        function forth_dots() {
            $('#Dot_2 div:nth-child(4)').css('opacity', '1');
            $('#Dot_1 div:nth-child(4)').css('opacity', '1');
        }
        // Проявление основной части текста
        function main_text_show(){
            $('.head_text > h2').css('opacity', '1');
        }
        // Проявление надписи 'bitbon system'
        function bitbon_text_show(){
            $('.head_text > h1').css('opacity', '1');
        }
        // Проявление надписи 'Перейти к статье'
        function read_more_show(){
            $('.head_text > a').css('opacity', '0.68');
            $('.arrow_down').css('opacity', '0.4');
        }

        function last_transition(){
            $('.logo').css('transition', '0s');
            $('.preloader').css('transition', '0s');
            $('.preload_back').css('transition', '0s');
        }

        // Смена статей в блоке новостей



        $('.news_btn').click(function () {
            $('.about_btn').css('transition', '0.3s');
            $(this).css('transition', '0.3s');
            $(this).addClass('active_big_btn');
            $('.about_btn').removeClass('active_big_btn');
            $('.Meaning').removeClass('active_little');
            $('.About').removeClass('active_little');
            $('.Tech').removeClass('active_little');
            $('.Global').addClass('active_little');
            check_big();


        });
        $('.about_btn').click(function () {
            $(this).css('transition', '0.3s');
            $('.news_btn').css('transition', '0.3s');
            $(this).addClass('active_big_btn');
            $('.news_btn').removeClass('active_big_btn');
            $('.Meaning').removeClass('active_little');
            $('.About').addClass('active_little');
            $('.Tech').removeClass('active_little');
            $('.Global').removeClass('active_little');
            setTimeout(function () {
                $('.about_btn').css('transition', '1s');
                $('.news_btn').css('transition', '1s');
            },1000);
            check_big();

        });

        $('.Global').click(function () {
            $(this).addClass('active_little');
            $('.About').removeClass('active_little');
            $('.Meaning').removeClass('active_little');
            $('.Tech').removeClass('active_little');

            check_little();
            check_big();

        });
        $('.Tech').click(function () {
            $(this).addClass('active_little');
            $('.Global').removeClass('active_little');
            $('.About').removeClass('active_little');
            $('.Meaning').removeClass('active_little');
            check_little();
            check_big();

        });
        $('.About').click(function () {
            $(this).addClass('active_little');
            $('.Global').removeClass('active_little');
            $('.Meaning').removeClass('active_little');
            $('.Tech').removeClass('active_little');

            check_little();
            check_big();

        });
        $('.Meaning').click(function () {
            $(this).addClass('active_little');
            $('.Global').removeClass('active_little');
            $('.About').removeClass('active_little');
            $('.Tech').removeClass('active_little');
            check_little();
            check_big();

        });











        function check_big(){
            if($('#News').attr('class').indexOf('active_big_btn') !== -1) {
                $('.news_btn').css('background', '#6163b9');
                $('.news_btn > h3').css('color', 'white');
                $('.about_btn').css('background', 'white');
                $('.about_btn > h3').css('color', '#6163b9');
                $('.Meaning').css('display', 'none');
                $('.About').css('display', 'none');
                $('.Tech').css('display', 'flex');
                $('.Global').css('display', 'flex');
                if($('.Global').attr('class').indexOf('active_little') !== -1) {
                    $('.Global_news').css('display', 'flex');
                    $('.About_news').css('display', 'none');
                    $('.Tech_news').css('display', 'none');
                    $('.Meaning_news').css('display', 'none');

                } else {
                    $('.Global_news').css('display', 'none');
                    $('.About_news').css('display', 'none');
                    $('.Tech_news').css('display', 'flex');
                    $('.Meaning_news').css('display', 'none');
                }
            } else {
                $('.news_btn').css('background', 'white');
                $('.news_btn > h3').css('color', '#6163b9');
                $('.about_btn').css('background', '#6163b9');
                $('.about_btn > h3').css('color', 'white');
                $('.Global').css('display', 'none');
                $('.Tech').css('display', 'none');
                $('.Meaning').css('display', 'flex');
                $('.About').css('display', 'flex');
                if($('.Meaning').attr('class').indexOf('active_little') !== -1) {
                    $('.Global_news').css('display', 'none');
                    $('.About_news').css('display', 'none');
                    $('.Tech_news').css('display', 'none');
                    $('.Meaning_news').css('display', 'flex');
                } else{
                    $('.Global_news').css('display', 'none');
                    $('.About_news').css('display', 'flex');
                    $('.Tech_news').css('display', 'none');
                    $('.Meaning_news').css('display', 'none');
                }
            }
            check_little()
        }
        function check_little(){
            if($('.Global').attr('class').indexOf('active_little') !== -1) {
                $('.Global > .underline').css('opacity', '1').css('display', 'block');
                $('.Tech > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                $('.Meaning > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                $('.About > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                setTimeout(function () {
                    if ($(window).width() <= '998') {
                        $('.Global > .underline').css('width', '95px');
                    } else {
                        $('.Global > .underline').css('width', '90%');
                    }
                }, 1)
            }
            if($('.Tech').attr('class').indexOf('active_little') !== -1) {
                $('.Tech > .underline').css('opacity', '1').css('display', 'block');
                $('.Global > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                $('.Meaning > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                $('.About > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                setTimeout(function () {
                    if ($(window).width() <= '998') {
                        $('.Tech > .underline').css('width', '100px');
                    } else {
                        $('.Tech > .underline').css('width', '90%');
                    }
                }, 1)
            }
            if($('.Meaning').attr('class').indexOf('active_little') !== -1) {
                $('.Meaning > .underline').css('opacity', '1').css('display', 'block');
                $('.Global > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                $('.Tech > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                $('.About > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                setTimeout(function () {
                    if ($(window).width() <= '998') {
                        $('.Meaning > .underline').css('width', '150px');
                    } else {
                        $('.Meaning > .underline').css('width', '90%');
                    }
                }, 1)
            }
            if($('.About').attr('class').indexOf('active_little') !== -1) {
                $('.About > .underline').css('opacity', '1').css('display', 'block');
                $('.Global > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                $('.Tech > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                $('.Meaning > .underline').css('opacity', '0').css('width', '0').css('min-width', '0');
                setTimeout(function () {
                    if ($(window).width() <= '998') {
                        $('.About > .underline').css('width', '130px');
                    } else {
                        $('.About > .underline').css('width', '90%');
                    }
                }, 1)
            }
        }
    $( ".Global" ).hover(
        function() {
            if($(window).width() > 1000){
                if($('.Global').attr('class').indexOf('active_little') !== -1) {

                } else{

                    if ($(window).width() <= '1018') {
                        $('.Global > .underline').css('width', '95px').css('opacity', '1');
                    } else {
                        $('.Global > .underline').css('width', '90%').css('opacity', '1');
                    }

                }
            }
        }, function() {
            if($(window).width() > 1000){
                if($('.Global').attr('class').indexOf('active_little') !== -1) {

                } else{

                    if ($(window).width() <= '1018') {
                        $('.Global > .underline').css('width', '0').css('min-width', '0px').css('opacity', '0');
                    } else {
                        $('.Global > .underline').css('width', '0').css('opacity', '0');
                    }

                }
            }
        }
    );
    $( ".Tech" ).hover(
        function() {
            if($(window).width() > 1000){

                if($(this).attr('class').indexOf('active_little') !== -1) {

                } else{

                    if ($(window).width() <= '1018') {
                        $('.Tech > .underline').css('width', '20%').css('min-width', '40px').css('opacity', '1');
                    } else {
                        $('.Tech > .underline').css('width', '30%').css('opacity', '1');
                    }

                }
            }
        }, function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_little') !== -1) {

                } else{

                    if ($(window).width() <= '1018') {
                        $('.Tech > .underline').css('width', '0').css('min-width', '0px').css('opacity', '0');
                    } else {
                        $('.Tech > .underline').css('width', '0').css('opacity', '0');
                    }

                }
            }

        }
    );
    $( ".About" ).hover(
        function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_little') !== -1) {

                } else{

                    if ($(window).width() <= '1018') {
                        $('.About > .underline').css('width', '20%').css('min-width', '40px').css('opacity', '1');
                    } else {
                        $('.About > .underline').css('width', '30%').css('opacity', '1');
                    }

                }
            }

        }, function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_little') !== -1) {

                } else{

                    if ($(window).width() <= '1018') {
                        $('.About > .underline').css('width', '0').css('min-width', '0px').css('opacity', '0');
                    } else {
                        $('.About > .underline').css('width', '0').css('opacity', '0');
                    }

                }
            }

        }
    );
    $( ".Meaning" ).hover(

        function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_little') !== -1) {

                } else{

                    if ($(window).width() <= '1018') {
                        $('.Meaning > .underline').css('width', '20%').css('min-width', '40px').css('opacity', '1');
                    } else {
                        $('.Meaning > .underline').css('width', '30%').css('opacity', '1');
                    }

                }
            }

        }, function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_little') !== -1) {

                } else{

                    if ($(window).width() <= '1018') {
                        $('.Meaning > .underline').css('width', '0').css('min-width', '0px').css('opacity', '0');
                    } else {
                        $('.Meaning > .underline').css('width', '0').css('opacity', '0');
                    }

                }
            }

        }
    );
    $(".about_btn").hover(
        function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_big_btn') !== -1) {

                } else{

                    $(this).css('background', 'rgba(97, 99, 185, 0.1)');
                    $('.about_btn > h3').css('color', '#6668a9');

                }
            }

        }, function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_big_btn') !== -1) {

                } else{

                    $(this).css('background', 'white');
                    $('.about_btn > h3').css('color', '#7b7dc3');

                }
            }

        }
    );
    $( ".news_btn" ).hover(
        function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_big_btn') !== -1) {

                } else{

                    $(this).css('background', 'rgba(97, 99, 185, 0.1)');
                    $('.news_btn > h3').css('color', '#6668a9');

                }
            }

        }, function() {
            if($(window).width() > 1000){
                if($(this).attr('class').indexOf('active_big_btn') !== -1) {

                } else{

                    $(this).css('background', 'white');
                    $('.news_btn > h3').css('color', '#7b7dc3');

                }
            }

        }
    );






    $(".article").hover(
        function() {
            if($(window).width() > 1000){
                $(this).find('h1').css('color', '#4648a5')
            }

        }, function() {
            if($(window).width() > 1000){
                $(this).find('h1').css('color', 'black')
            }

        }
    );
        // Смена цвета иконок при наведении в футере
        $('.social_fot > a').hover(
            function(){
                $(this).find('svg').css('fill', '#cec1ff');
            },
            function(){
                $(this).find('svg').css('fill', '#5964aa');
            });

        // Анимации при скролле
    function crowdsale_icons(){
        $('#Desk_links div:nth-child(3)').css('opacity', '1');
        $('#Mobile_links').css('opacity', '1');
        setTimeout(function () {
            $('#Desk_links div:nth-child(2)').css('opacity', '1');
            $('#Desk_links div:nth-child(4)').css('opacity', '1');
        }, 150);
        setTimeout(function () {
            $('#Desk_links div:nth-child(1)').css('opacity', '1');
            $('#Desk_links div:nth-child(5)').css('opacity', '1');
        }, 300)
    }
    function pay_methots(){
        if ($(window).width() > 1000){
            $('.oplata img:nth-child(4)').css('opacity', '1');
            setTimeout(function () {
                $('.oplata img:nth-child(3)').css('opacity', '1');
                $('.oplata img:nth-child(5)').css('opacity', '1');
            }, 150);
            setTimeout(function () {
                $('.oplata img:nth-child(2)').css('opacity', '1');
                $('.oplata img:nth-child(6)').css('opacity', '1');
            }, 300);
            setTimeout(function () {
                $('.oplata img:nth-child(1)').css('opacity', '1');
                $('.oplata img:nth-child(7)').css('opacity', '1');
            }, 450);
        } else{
            $('.oplata > img').css('opacity', '1');
        }

    }
        $('.top_headers').viewportChecker({
            callbackFunction: function () {
                $('.top_headers').css('opacity', '1');
                setTimeout(function () {
                    $('.till_end').css('opacity', '1');
                    $('.kurs').css('opacity', '1');
                }, 100);
            }
        });
        $('.kurs').viewportChecker({
            callbackFunction: function () {
                $('.kurs').css('opacity', '1')
            }
        });
        $('.link').viewportChecker({
            callbackFunction: function () {
                crowdsale_icons();
                $('.link').css('opacity', 1);

            }
        });
    $('.oplata').viewportChecker({
        callbackFunction: function () {
            pay_methots();

        }
    });
    $('.buy > p').viewportChecker({
        callbackFunction: function () {
            $('.buy > p').css('opacity', '1')

        }

    });
        $('.buy_btn').viewportChecker({
            callbackFunction: function () {
                $('.buy_btn').css('opacity', '0.95')
            }

        });
        // Вызов всех анимаций
        setTimeout (sfera_grow_more, 1);
        setTimeout (sfera_grow_norm, 1000);
        setTimeout (transe, 1400);
        setTimeout (sfera_little, 2100);
        setTimeout (preloader_Little, 2500);
        setTimeout (sfera_none, 2800);
        setTimeout (header_show, 2800);
        setTimeout (check_big, 2800);
        setTimeout (logo_show, 3000);
        setTimeout (Sphere_show, 3600);
        setTimeout (Litera,3800);
        setTimeout (second_dots, 3900);
        setTimeout (third_dots, 4000);
        setTimeout (forth_dots, 4100);
        setTimeout (main_text_show, 4200);
        setTimeout (bitbon_text_show, 4300);
        setTimeout (read_more_show, 4400);
        setTimeout (last_transition, 4400);
    });