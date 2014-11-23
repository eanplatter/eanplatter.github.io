$(document).ready(function() {
    var pulse = function() {
    $(".pulse").animate({ 
      backgroundColor: '#8CCDA4'
    }, 10000, function() {
        $(".pulse").animate({
            backgroundColor: '#D41E26',
            color: "#fff"
        }, 10000);
    })

  };
    pulse();
});