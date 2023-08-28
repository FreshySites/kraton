// JS file for customizations. jQuery is enabled through theme.

// for accordion modules, change open toggle color to white if there is a dark background
jQuery(document).ready(function($){
    if($('.et_pb_accordion').length) {
        $('.et_pb_accordion').each(function(){
            let section = $(this).parent().parent().parent().css('background-color');
            let row = $(this).parent().parent().css('background-color');
            let column = $(this).parent().css('background-color');
            
            if (section == 'rgb(255, 255, 255)' && row == 'rgba(0, 0, 0, 0)' && column == 'rgba(0, 0, 0, 0)') {
                $(':root').css('--accordion-toggle-color', '#172b54');
            }
            else if (section == 'rgba(0, 0, 0, 0)' && row == 'rgb(255, 255, 255)' && column == 'rgba(0, 0, 0, 0)') {
                $(':root').css('--accordion-toggle-color', '#172b54');
            }
            else if (section == 'rgba(0, 0, 0, 0)' && row == 'rgba(0, 0, 0, 0)' && column == 'rgb(255, 255, 255)') {
                $(':root').css('--accordion-toggle-color', '#172b54');
            }
        })
    }
})
