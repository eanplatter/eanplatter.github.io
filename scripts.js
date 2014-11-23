$(document).ready(function() {
    var pulse = function() {
    $(".pulse").animate({ 
      backgroundColor: '#8CCDA4'
    }, 100, function() {
        $(".pulse").animate({
            backgroundColor: '#424242'
        }, 100, function(){
            $(".pulse").animate({
                backgroundColor: '#94CCC9'
            }, 100, function() {
                pulse();
            });
        });
    })

  };
    pulse();
});