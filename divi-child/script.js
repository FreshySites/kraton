// JS file for customizations. jQuery is enabled through theme.

// for accordion modules, change open toggle color to white if there is a dark background
jQuery(document).ready(function($){
    if($('.et_pb_accordion').length) {
        $('.et_pb_accordion').each(function(){
            let section = $(this).parent().parent().parent();
            let row = $(this).parent().parent();
            let column = $(this).parent();
            if (section.css('background-color') == '#ffffff' || section.css('background-color') == '#fff' || section.css('background-color') == 'rgb(255, 255, 255)' || 
                row.css('background-color') == '#ffffff' || row.css('background-color') == '#fff' || row.css('background-color') == 'rgb(255, 255, 255)' || 
                column.css('background-color') == '#ffffff' || column.css('background-color') == '#fff'|| column.css('background-color') == 'rgb(255, 255, 255)') {
                $(':root').css('--accordion-toggle-color', '#172b54');
            }
            console.log(section.css('background-color'));
        })
    }
})
