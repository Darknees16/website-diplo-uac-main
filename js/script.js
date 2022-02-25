/* */
/* show / hide habilidades iteams
const skilliteams = document.querySelectorAll('#habilidades .skill');

skilliteams.forEach(skill => { 
    skill.querySelector('.head').addEventListener('click',()=>{
        skill.querySelector('.iteams').classlist.toggle('show-items');
    })
})
*/

$(document).ready(function(){
    // Menú Mobile
      // Abrir y Cerrar
      $('#abrir').click(function(){
            $('#menu-movil').animate({
                right: 0
            },300);
            $('#abrir').hide();
            $('#cerrar').show();
            event.preventDefault();
      });

      $('#cerrar').click(function(){
            $('#menu-movil').animate({
                right: '-100%'
            },300);
            $('#abrir').show();
            $('#cerrar').hide();
            event.preventDefault();
        });


    // Configuración de Enlaces de Menú
    $('.link-scroll').click(function(){
        $('#menu-movil').animate({
            right: '-100%'
        },300);
        $('#abrir').show();
        $('#cerrar').hide();
    });


    // Activación de transición del menú
    $('.link-scroll, #to-portaf').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeOutExpo');
        event.preventDefault();
    });


    // Función Sticky con color
    $(window).scroll(function(){
        if ($(this).scrollTop() > 250) {
            $('header').removeClass('transparente');
            $('header').addClass('negro');

            $('header').css('height','70px');
            $('header a').css('width','144px');
            $('header a').css('height','48px');
        } else {
            $('header').removeClass('negro');
            $('header').addClass('transparente');

            $('header').css('height','100px');
            $('header a').css('width','227px');
            $('header a').css('height','76px');
        }
    });
});

//typing animation script

var typed = new Typed('.typing', {
    strings: [ ' Developer', 'UI/UX Designer','Estudiante', 'proximante youtuber y stremer :v'],
    typeSpeed:100,
    backSpedd:70,
    loop:true
    });



