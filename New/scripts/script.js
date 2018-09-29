$.afterlag(function() {

    $(function() {




        function sfera_grow_more() {
            if ($(window).width() <= '800') {
                $('.sphere').css('width', '400px').css('height', 'auto').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
                $('.preloader').css('opacity', '1');
                $('.text_first').css('opacity', '0.7').css('font-size', '16px').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
            } else {
                $('.sphere').css('width', '38%').css('height', 'auto').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
                $('.preloader').css('opacity', '1');
                $('.text_first').css('opacity', '0.7').css('font-size', '23px').css('filter', 'blur(0px)').css('-webkit-filter:', 'blur(0px)');
            }
        }
        function sfera_grow_norm() {
            if ($(window).width() <= '800') {
                $('.sphere').css('width', '300px').css('height', 'auto');
            } else {
                $('.sphere').css('width', '30%').css('height', 'auto');
            }
        }
        function transe() {
            $('.sphere').css('transition', '2s');
            $('.preloader').css('transition', '2s')
        }
        function sfera_little() {
            $('.sphere').css('opacity', '0').css('width', '4000px').css('height', 'auto').css('filter', 'blur(500px)');
            $('.text_first').css('opacity', '0').css('filter', 'blur(100px)');
            $('.preloader').css('filter', 'blur(500px)');
        }

        function preloader_Little() {



            $('.preloader').css('transition', '2s').css('height', '750px').css('background-image', 'none').css('height', 'auto');
            $('body').css('background-color', 'white');
            $('.main').css('opacity', '1').css('display', 'flex');
            $('footer').css('opacity', '1').css('display', 'flex');
            $('.news').css('opacity', '1').css('display', 'flex');
            $('.Girl').css('display', 'block');
            $('.city').css('display', 'block');
        }

        function sfera_none() {
            $('.preloader').css('flex-direction', 'row');
            $('.sphere').css('display', 'none');
            $('.text_first').css('display', 'none');
            $('.preloader').css('filter', 'blur(0px)').css('background-color', 'white');

        }
        function header_show(){
            $('.stat').css('opacity', '1').css('filter', 'blur(0px)');
            $('.city').css('opacity', '1').css('filter', 'blur(0px)');
            $('.logo').css('opacity', '1');
            $('.src_button').css('opacity', '1');
            $('.and').css('opacity', '1');
        }

        $('.src_button').click(function(){
            $('.src').toggleClass('active_src');
        });
        $('.End_src').click(function(){
            $('.src').toggleClass('active_src');
        });



    });
});
