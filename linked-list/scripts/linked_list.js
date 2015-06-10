var index = 0;
var displayMenu = function() {
    
}

$('.create-btn').on('click', function(){
    $('.return').text('');
    $('.output').text('');
    if ($('.create-text').val() !== '') {
        if (index === 0) {
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $f_list = $('<ul />', { 
                class: 'f_list',
                //class attribute
                'forward_list-size': $val,       
            })
            //after element with class '.forward_list-info'
            $('.forward_list-info').after($f_list);
            for (var i = 0; i < $val; i++) {
                if(i === 0) {
                    var $f_listHead = $('<li />', { 
                        class: 'f_listHead-item',
                        'f_list-index': 'head',
                    })
                    .text('HEAD');
                    $f_listHead.appendTo($f_list);
                }
                var $randVal = 1 + Math.floor(Math.random() * 9);
                var $f_listItem = $('<li />', { 
                    class: 'f_list-item' + ' ' + index,
                    'f_list-index': index,
                })
                $f_listItem.appendTo($f_list);
                var $f_listData = $('<div />', {
                    class: 'f_list-item-data',
                })
                .text($randVal);
                $f_listData.appendTo($f_listItem);
                
                var $f_listPointer = $('<div />', {
                    class: 'f_list-item-pointer',
                })
                .text('*next');
                $f_listData.after($f_listPointer);
                index++;
                if(i === 0) {
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
                    $f_listHead.after($f_listArrow);
                }
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
        //If user wants to create another linked-list without refreshing page
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
                if(i === 0) {
                    var $f_listHead = $('<li />', { 
                        class: 'f_listHead-item',
                        'f_list-index': 'head',
                    })
                    .text('HEAD');
                    $f_listHead.appendTo($f_list);
                }
                var $randVal = 1 + Math.floor(Math.random() * 9);
                var $f_listItem = $('<li />', { 
                    class: 'f_list-item' + ' ' + index,
                    'f_list-index': index,
                })
                $f_listItem.appendTo($f_list);
                var $f_listData = $('<div />', {
                    class: 'f_list-item-data',
                })
                .text($randVal);
                $f_listData.appendTo($f_listItem);
                var $f_listPointer = $('<div />', {
                    class: 'f_list-item-pointer',
                })
                .text('next');
                $f_listData.after($f_listPointer);
                index++;
                if(i === 0) {
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
                    $f_listHead.after($f_listArrow);
                }
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
            $('.forward_list-size-p').text(' ' + index);
        }
        var $f_listNullItem = $('<li />', { 
            class: 'f_listNull-item',
            'f_list-index': 'null',
        })
        .text('NULL');
        $('.arrow:last').after($f_listNullItem);
    }
});

$('.front-btn').on('click', function(){
    if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return').text($('.f_list li:nth-of-type(2) .f_list-item-data').html());
        $('.output').text('No output');
    }
    else if($('.forward_list-info').hasClass('active') === true && index === 0){
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!');
    }
});

/*Fill*/
$('.assign-btn').on('click', function() {
    $('.return').text('');
    $('.output').text('');
    if($('.assign-size').val() !== '' && $('.assign-val').val() !== '') {
        if(index !== 0) {
            $('.f_list-item').remove();
            $('.f_list').remove();
            index = 0;
            var $size = $('.assign-size').val();
            var $val = $('.assign-val').val();
            $('.assign-size').val('');
            $('.assign-val').val('');
            var $f_list = $('<ul />', { 
                class: 'f_list',
                //class attribute
                'forward_list-size': $size,       
            })
            $('.forward_list-info').after($f_list);
            for (var i = 0; i < $size; i++) {
                if(i === 0) {
                    var $f_listHead = $('<li />', { 
                        class: 'f_listHead-item',
                        'f_list-index': 'head',
                    })
                    .text('HEAD');
                    $f_listHead.appendTo($f_list);
                }
                var $f_listItem = $('<li />', { 
                    class: 'f_list-item' + ' ' + index,
                    'f_list-index': index,
                })
                $f_listItem.appendTo($f_list);
                var $f_listData = $('<div />', {
                    class: 'f_list-item-data',
                })
                .text($val);
                $f_listData.appendTo($f_listItem);
                
                var $f_listPointer = $('<div />', {
                    class: 'f_list-item-pointer',
                })
                .text('next');
                $f_listData.after($f_listPointer);
                index++;
                if(i === 0) {
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
                    $f_listHead.after($f_listArrow);
                }
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
        $('.forward_list-size-p').text(' ' + index);
        }
        else {
            var $size = $('.assign-size').val();
            var $val = $('.assign-val').val();
            $('.assign-size').val('');
            $('.assign-val').val('');
            var $f_list = $('<ul />', { 
                class: 'f_list',
                //class attribute
                'forward_list-size': $size,       
            })
            $('.forward_list-info').after($f_list);
            for (var i = 0; i < $size; i++) {
                if(i === 0) {
                    var $f_listHead = $('<li />', { 
                        class: 'f_listHead-item',
                        'f_list-index': 'head',
                    })
                    .text('HEAD');
                    $f_listHead.appendTo($f_list);
                }
                var $f_listItem = $('<li />', { 
                    class: 'f_list-item' + ' ' + index,
                    'f_list-index': index,
                })
                $f_listItem.appendTo($f_list);
                var $f_listData = $('<div />', {
                    class: 'f_list-item-data',
                })
                .text($val);
                $f_listData.appendTo($f_listItem);
                
                var $f_listPointer = $('<div />', {
                    class: 'f_list-item-pointer',
                })
                .text('next');
                $f_listData.after($f_listPointer);
                index++;
                if(i === 0) {
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
                    $f_listHead.after($f_listArrow);
                }
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
        var $f_listNullItem = $('<li />', { 
            class: 'f_listNull-item',
            'f_list-index': 'null',
        })
        .text('NULL');
        $('.arrow:last').after($f_listNullItem);
    }
});

$('.empty-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return').text('true');
        $('.output').text('No output');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0){
        $('.return').text('false');
        $('.output').text('No output');
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!');
    }
});

$('.reverse-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') !== true && index === 0) {
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return').text('');
        $('.output').text('');
        var $size = Math.floor(index/2) + 1;
        for(var i = 2; i <= $size; i++ ) {
            /*$('.f_list .f_list-item:nth-of-type('+i+')');*/ /*Note: This will result in undefined for the first index because the head                                                                   includes .f_list-item in the class name. So index should start at 2.*/
            var $index_from_front = $('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html();
            var $index_from_back = $('.f_list .f_list-item:nth-last-of-type('+i+')'+' .f_list-item-data').html();
            $('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html($index_from_back);
            $('.f_list .f_list-item:nth-last-of-type('+i+')'+' .f_list-item-data').html($index_from_front);
            
        }   
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!');
    }
});

$('.sort-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return').text('');
        $('.output').text('');
        var $size = index + 1;
        var $array = [];
        for(var i = 2; i <= $size; i++) {
            $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
        }
        /*Default sort (operator is "<")*/
        if ($('.sort-text').val() == '') {
            /*If negative number is returned, a is less than b, so it is placed to the left of b. 
              If positive number is returned, a is placed to the right of b.*/
            $array.sort(function(a,b){return a-b});
        }
        else if ($('.sort-text').val() == 'greater') {
            $array.sort(function(a,b){return b-a});
        }
        /*More pred conditions later here*/
        for(var i = 2; i <= $size; i++) {
            $('.f_list .f_list-item:nth-of-type('+i+')'+ ' .f_list-item-data').html($array[i-2]);
        }
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!'); 
    }
});

$('.unique-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return').text('');
        $('.output').text('');
        var $size = index + 1;
        var $array = [];
        for(var i = 2; i <= $size; i++) {
            $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
        }
        function checkDuplicate($element,current_Index) {
            for (var i = 0; i < current_Index; i++) {
                if ($array[i] === $element) {
                    return true;
                    break;
                }
                else if($array[i] !== $element && i === current_Index) {return false;}
                else {continue;}
            }
        }
        var $index_Remove = 3;
        var $current_List_Size = index;
        for(var i = 0; i < $array.length; i++) {
            if(i !== 0) {
                if(checkDuplicate($array[i],i) === true) {
                    $('.f_list .f_list-item:nth-of-type('+$index_Remove+')').remove();
                    $('.f_list .arrow:nth-of-type('+$index_Remove+')').remove();
                    $('.forward_list-size-p').html(--$current_List_Size);
                }
                else {
                    $index_Remove++;
                }
            }
        }
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!'); 
    }
});