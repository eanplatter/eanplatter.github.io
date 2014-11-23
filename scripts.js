$(document).ready(function() {
    var pulse = function() {
    $(".pulse").animate({ 
      backgroundColor: '#d6d6d6'
    }, 100, function() {
        $(".pulse").animate({
            backgroundColor: '#424242'
        }, 100, function(){
            $(".pulse").animate({
                backgroundColor: '#d6d6d6'
            }, 100, function() {
                pulse();
            });
        });
    })

  };
    pulse();
});