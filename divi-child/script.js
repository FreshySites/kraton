// JS file for customizations. jQuery is enabled through theme.

// for accordion modules, change open toggle color to white if there is a dark background
jQuery(document).ready(function($){
    if($('.et_pb_accordion').length) {
        $('.et_pb_accordion').each(function(){
            let row = $(this).parent().parent();
            let column = $(this).parent();
            if (row.css('background-color') == '#2F9FA8' || row.css('background-color') == 'rgb(47, 159, 168)' || column.css('background-color') == '#2F9FA8' || column.css('background-color') == 'rgb(47, 159, 168)') {
                $(':root').css('--accordion-toggle-color', '#ffffff');
            }
        })
    }
})