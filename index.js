$(document).ready(function () {
    $(window).scroll(function () {

        if (this.scrollY > 20) {

            $('.navbar').addClass("sticky");

        }
        else {
            $('.navbar').removeClass("sticky");
        }


    })
    
    //typing text animation
    var typed= new Typed(".typing",{
        strings:["Developer", "Progammer", "Designer"],
        typeSpeed:100,
        backSpeed: 60,
        loop:true
    });

    var typed= new Typed(".typing-2",{
        strings:["Developer", "Progammer", "Designer"],
        typeSpeed:100,
        backSpeed: 60,
        loop:true
    });




    // toggle menu/navbar scripting

    $('.menu-btn').click(function () {

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});