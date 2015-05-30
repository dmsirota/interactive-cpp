var index = 0;
var displayMenu = function() {
    
}

//Last element should be null
$('.create-btn').on('click', function(){
    $('.return').text('');
    if ($('.create-text').val() != '') {
        if (index === 0) {
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $f_list = $('<ul />', { 
                class: 'f_list',
                //class attribute
                'forward_list-size': $val       
            })
            //append to element with class '.forward_list-info'
            $('.forward_list-info').after($f_list);
            for (var i = 0; i < $val; i++) {
                var randVal = 1 + Math.floor(Math.random() * 9);
                var $f_listItem = $('<li />', { 
                    class: 'f_list-item',
                    'f_list-index': index,
                })
                //f_listItem has text with randVal
                .text(randVal);
                $f_listItem.appendTo('.f_list');
                index++;
                var $f_listArrow = $('<div />', {
                    class: 'arrow',
                });
                var $f_listLine = $('<div />', {
                    class: 'line',
                });
                var $f_listPoint = $('<div />', {
                    class: 'point',
                });
                $f_listArrow.append($f_listLine);
                $f_listArrow.append($f_listPoint);
                $f_listItem.after($f_listArrow);
            }
            $('.forward_list-info').addClass('active');
            $('.forward_list-size-p').text(' ' + index);
        }
        else {
            $('.f_list-item').remove();
            $('.f_list').remove();
            index = 0;
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $f_list = $('<li />', { 
                class: 'f_list',
                'forward_list-size': $val
            })
            $('.forward_list-info').after($f_list);
            for (var i = 0; i < $val; i++) {
                var randVal = 1 + Math.floor(Math.random() * 9);
                var $f_listItem = $('<li />', { 
                    class: 'f_list-item',
                    'f_list-index': index,

                })
                .text(randVal);
                $f_listItem.appendTo('.f_list');
                index++;
                var $f_listArrow = $('<div />', {
                    class: 'arrow',
                });
                var $f_listLine = $('<div />', {
                    class: 'line',
                });
                var $f_listPoint = $('<div />', {
                    class: 'point',
                });
                $f_listArrow.append($f_listLine);
                $f_listArrow.append($f_listPoint);
                $f_listItem.after($f_listArrow);
                $('.forward_list-size-p').text(' ' + index);
            }
        }
        var $f_listNullItem = $('<li />', { 
            class: 'f_listNull-item',
            'f_list-index': 'null',
        })
        .text('NULL');
        $('f_listNull-item').css('wdith','100px');
        $('.arrow:last').after($f_listNullItem);
    }
});

$('.front-btn').on('click', function(){
     $('.return').text('');
         
});