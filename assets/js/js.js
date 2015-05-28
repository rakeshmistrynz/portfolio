/*!
 * Author: Rakesh Mistry
 * 27 May 2015
 * rakeshmistry.co.nz
 */

// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 60)
                }, 1500);
                return false;
            }
        }
    });
});

//********************************************************************//
//Project indicator, when clicked indicates current project 
//by adding a class to selected project container and filling in the indicator
//********************************************************************//

$('.carousel-indicators li').on('click', function() {
    var project_num = $(this).data('project');
    $('li').removeClass('active');
    $(this).addClass('active');
    $('.active-project').removeClass('active-project');
    $('#' + project_num).addClass('active-project');
});


//********************************************************************//
//Click on project logo to activate project
//********************************************************************//
$('.logo img, .logo p').on('click', function() {
    var project_num = $(this).data('project');
    var li_active = $('.carousel-indicators li').filter(function() {
        return $(this).data("project") == project_num;
    });
    $('li').removeClass('active');
    li_active.addClass('active');
    $('.active-project').removeClass('active-project');
    $('#' + project_num).addClass('active-project');
});


//********************************************************************//
// Fold up navbar after user has selected menu item
//********************************************************************//
$('.nav li a').on('click', function() {

    $("#navbar-collapse-1").collapse('hide');

});