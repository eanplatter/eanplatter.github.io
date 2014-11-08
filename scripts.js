$(document).ready(function() {
    var pulse = function() {
    $(".pulse").animate({ 
      backgroundColor: '#2E9AFE',
      color: "#FFF"
    }, 5500, function() {
        $(".pulse").animate({
            backgroundColor: '#FA5858',
            color: "#FFF"
        }, 5500, function(){
            $(".pulse").animate({
                backgroundColor: '#2E9AFE',
                color: "#FFF"
            }, 5500, function() {
                pulse();
            });
        });
    })

  };
    pulse();
});