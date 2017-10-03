
var $process = true; // process for the resize part
var $category_ = $('.category-list');
var $category_text = $('.category-list-text');

// Will fire during load
$(window).on('load', function(){
    var $width_ = $(window).width();
    change_to_dropdown($width_);
});

// Will fire during resizing especially on browsers
$(window).resize(function(){
    var $width_ = $(window).width();
    change_to_dropdown($width_);
});

// this area will add the classes that will show the list
// we are just using dropdown and transition component in semanticui 
// to prevent the conflict of native css on your site.
// $('.ui.dropdown').dropdown() i think will work only if you added some features on the semantic components, 
// but in my case i'm lazy (hahahha) so i just created my on click event to add the required classes to show the list.
$(document).on('click','.ui.dropdown', function(){
    $category_.toggleClass('active visible');
    $category_.find('ul').removeClass('hidden').toggleClass('visible');
});


function change_to_dropdown($width_){
    if($width_ < 768){
        if($process == true){
            $category_.addClass('ui fluid selection dropdown').prepend('<i class="dropdown icon"></i>');
            $category_text.addClass('default text');
            $category_.find('ul').addClass('menu transition hidden').attr('tabindex', '-1');
            $category_.find('ul > li').addClass('item');
            process_once = false;
        }
    }else{
        $category_.removeAttr('class').addClass('category-list');
        $category_text.removeClass('default text');
        $('.dropdown.icon').remove();
        $category_.find('ul').removeAttr('class');
        $category_.find('ul > li').removeAttr('class');
        process_once = true;
    }
}