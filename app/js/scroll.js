/**
 * Created by voval on 31.07.2017.
 */
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    var href = $.attr(this, 'href');
    $page.animate({
        scrollTop: $(href).offset().top
    }, 400, function () {
        window.location.hash = href;
    });
    return false;
});