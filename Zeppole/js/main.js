 
$(document).ready(function () { 
    displaySoupOfTheDay();
    $('.carousel').carousel({
        interval: 2000
    })
    $('#close').click(function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
    
    $(window).on('scroll', function(event) { 
        if ($(window).scrollTop() > 290) {
             $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });

    $('.myCard').click(function(){
        var $card = $(this);
        var $title = $card.children(".myCardTitle");
        var $text = $card.children(".myCardText");
        if($title.hasClass("hide")){
            $title.removeClass("hide");
            $text.addClass("hide");
        } else {
            $text.removeClass("hide");
            $title.addClass("hide");
        }
    });

    setInterval(changeCafeHours, 4000);

    function changeCafeHours(){
        $('#cafeHours').animate({'opacity': 0}, 1000, function () {
            var appleCafe = 'Apple Street Café<br/>Mon-Sat 6am-6pm<br/>Sun 8-4pm';
            var downtownCafe = 'Downtown Café<br/>Mon-Sat 8am-3pm<br/>Sun Closed'; 
            if( $(this).text().indexOf('Downtown') >= 0){
                $(this).html(appleCafe);
            } else {
                $(this).html(downtownCafe);
            }  
        }).animate({'opacity': 1}, 100);
    }

    function displaySoupOfTheDay() {
        var message; 
        switch (new Date().getDay()) {
            case 0:
                message = "Today's soup of the day is Vegetarian Tomato Basil with Ravioli!";
                break;
            case 1:
                message = "Today's soup of the day is Chicken with Wild Rice and Vegetarian Tomato Basil with Ravioli!";
                break;
            case 2:
                message = "Today's soup of the day is Baked Potato & Bacon Chowder and Vegetarian Tomato Basil with Ravioli!";
                break;
            case 3:
                message = "Today's soup of the day is Tortilla and Vegetarian Tomato Basil with Ravioli!";
                break;
            case 4:
                message = "Today's soup of the day is Vegetarian Cheddar Vegetable and Vegetarian Tomato Basil with Ravioli!";
                break;
            case 5:
                message = "Today's soup of the day is Clam Chowder and Vegetarian Tomato Basil with Ravioli!";
                break;
            case 6:
                message = "Today's soup of the day is Minestrone and Vegetarian Tomato Basil with Ravioli!";
        } 
        $('#message').text(message); 
    }
});




