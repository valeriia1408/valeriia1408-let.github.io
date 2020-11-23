$(document).ready(function() {
    var navToggle = $('.nav-toggle-icon');
    var nav = $('.nav');

    $(navToggle).on('click', function () {
        $('.header').height(function(i, val){
            if (val === 730) {
                return 930;
            } else {
                return 730;
            }
        });
        $(nav).toggleClass('open');
    });
});
