$('.dropdown').hover(function(){
    $(this).toggleClass('active')
    $(this).children('.dropdown-body').slideToggle()
    $(this).children('.dropdown-button').find('.dropdown-icon').toggleClass('hidden')
},function(){
    $(this).toggleClass('active')
    $(this).children('.dropdown-body').slideToggle()
    $(this).children('.dropdown-button').find('.dropdown-icon').toggleClass('hidden')
})


$('.open-menu-mobile , .close-menu-modal , .backdrop-popup').click(function (){
    $('.menu-modal').fadeToggle()
    $('.backdrop-popup').fadeToggle()
})