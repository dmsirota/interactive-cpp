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

$('.emplace_front-btn').on('click', function() {
    /*$('.return').text('');
    $('.output').text('');*/
    var $val = $('.emplace_front-text').val();
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        var $f_listHead = $('<li />', { 
            class: 'f_listHead-item',
            'f_list-index': 'head',
        })
        .text('HEAD');
        $f_listHead.appendTo('.f_list');
        var $f_listItem = $('<li />', { 
            class: 'f_list-item' + ' ' + index,
            'f_list-index': index,
        })
        $f_listItem.appendTo('.f_list');
        var $f_listData = $('<div />', {
            class: 'f_list-item-data',
        })
        .text($val);
        $f_listData.appendTo($f_listItem);
        var $f_listPointer = $('<div />', {
            class: 'f_list-item-pointer',
        })
        .text('*next');
        $f_listData.after($f_listPointer);
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
        index++;
        $('.forward_list-size-p').text(' ' + index);
        var $f_listNullItem = $('<li />', { 
            class: 'f_listNull-item',
            'f_list-index': 'null',
        })
        .text('NULL');
        $('.arrow:last').after($f_listNullItem);
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        var $f_listItem = $('<li />', { 
            class: 'f_list-item' + ' ' + 0,
            'f_list-index': 0,
        })
        $f_listItem.insertAfter('.f_list .arrow:first');
        var $f_listData = $('<div />', {
            class: 'f_list-item-data',
        })
        .text($val);
        $f_listData.appendTo($f_listItem);
        var $f_listPointer = $('<div />', {
            class: 'f_list-item-pointer',
        })
        .text('*next');
        $f_listData.after($f_listPointer);
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
        index++;
        $('.forward_list-size-p').text(' ' + index);
        var $newIndex = 0;
        var $size = index + 1;
        for(var i= 3; i <= $size; i++) {
            $('.f_list .f_list-item:nth-of-type('+i+')').removeClass($newIndex.toString()).addClass((++$newIndex).toString());
            $('.f_list .f_list-item:nth-of-type('+i+')').attr('f_list-index',$newIndex.toString());
        }
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!'); 
    }
});

$('.pop_front-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return').text('');
        $('.output').text('');
        $('.f_list .f_list-item:nth-of-type(2)').remove();
        $('.f_list .arrow:nth-of-type(2)').remove();
        $('.forward_list-size-p').html(--index);
    }
    else {
        $('.return,.output').text('No list!');
    }
});

/*Drop-Down menu for Emplace After Iterator*/
$('body').on('click', function(e) {
    if(!$(e.target).hasClass('emplace_after_iterator-position-list') && !$(e.target).parent().hasClass('emplace_after-iterator-btn') && $('.emplace_after_iterator-position-list').css('visibility') === 'visible') {
        $('.emplace_after_iterator-position-list').css('visibility','hidden');
    }
    else if($(e.target).parent().hasClass('emplace_after-iterator-btn') && $('.emplace_after_iterator-position-list').css('visibility') === 'visible') {
        $('.emplace_after_iterator-position-list').css('visibility','hidden');
    }
    else if($(e.target).parent().hasClass('emplace_after-iterator-btn') && $('.emplace_after_iterator-position-list').css('visibility') === 'hidden') {
        $('.emplace_after_iterator-position-list').css('visibility','visible');
    }
});

$('.emplace_after_iterator-position-list li').on('click', function() {
    $('.emplace_after-position').text($(this).text());
    $('.emplace_after_iterator-position-list').css('visibility','hidden');
});

$('.emplace_after-btn').on('click', function() {
    var $position = $('.emplace_after-position').val();
    var $val = $('.emplace_after-val').val();
    if($('.forward_list-info').hasClass('active') === true && ($position !== 'Choose')) {
        if($position === 'f_list.begin()' && index === 0 || $position === '/') {
            $('.return-div,.output-div').css('width','200px').css('height','100px');
            $('.return,.output').css('font-size','1.5em').css('line-height','30px').text('Runtime Error! Empty list- undefined behavior!');
        }
        else if($position === 'f_list.begin()' && index !== 0) {
            var $f_listItem = $('<li />', { 
                class: 'f_list-item' + ' ' + 1,
                'f_list-index': 1,
            })
            $f_listItem.insertAfter('.f_list .arrow:nth-of-type(2)');
            var $f_listData = $('<div />', {
                class: 'f_list-item-data',
            })
            .text($val);
            $f_listData.appendTo($f_listItem);
            var $f_listPointer = $('<div />', {
                class: 'f_list-item-pointer',
            })
            .text('*next');
            $f_listData.after($f_listPointer);
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
            index++;
            $('.forward_list-size-p').text(' ' + index);
            var $newIndex = 1;
            var $size = index + 1;
            for(var i= 4; i <= $size; i++) {
                $('.f_list .f_list-item:nth-of-type('+i+')').removeClass($newIndex.toString()).addClass((++$newIndex).toString());
                $('.f_list .f_list-item:nth-of-type('+i+')').attr('f_list-index',$newIndex.toString());
            }
        }
        else if($position === 'f_list.before_begin()' && index === 0) {
            var $f_listHead = $('<li />', { 
            class: 'f_listHead-item',
            'f_list-index': 'head',
            })
            .text('HEAD');
            $f_listHead.appendTo('.f_list');
            var $f_listItem = $('<li />', { 
                class: 'f_list-item' + ' ' + index,
                'f_list-index': index,
            })
            $f_listItem.appendTo('.f_list');
            var $f_listData = $('<div />', {
                class: 'f_list-item-data',
            })
            .text($val);
            $f_listData.appendTo($f_listItem);
            var $f_listPointer = $('<div />', {
                class: 'f_list-item-pointer',
            })
            .text('*next');
            $f_listData.after($f_listPointer);
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
            index++;
            $('.forward_list-size-p').text(' ' + index);
            var $f_listNullItem = $('<li />', { 
                class: 'f_listNull-item',
                'f_list-index': 'null',
            })
            .text('NULL');
            $('.arrow:last').after($f_listNullItem);
        }
        else if($position === 'f_list.before_begin()' && index !== 0) {
            var $f_listItem = $('<li />', { 
                class: 'f_list-item' + ' ' + 0,
                'f_list-index': 0,
            })
            $f_listItem.insertAfter('.f_list .arrow:first');
            var $f_listData = $('<div />', {
                class: 'f_list-item-data',
            })
            .text($val);
            $f_listData.appendTo($f_listItem);
            var $f_listPointer = $('<div />', {
                class: 'f_list-item-pointer',
            })
            .text('*next');
            $f_listData.after($f_listPointer);
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
            index++;
            $('.forward_list-size-p').text(' ' + index);
            var $newIndex = 0;
            var $size = index + 1;
            for(var i= 3; i <= $size; i++) {
                $('.f_list .f_list-item:nth-of-type('+i+')').removeClass($newIndex.toString()).addClass((++$newIndex).toString());
                $('.f_list .f_list-item:nth-of-type('+i+')').attr('f_list-index',$newIndex.toString());
            }
        }
    }
    else if($('.forward_list-info').hasClass('active') === true && ($position === 'Choose')) {
        $('.return,.output').text('No iterator');
    }
    else {
        $('.return,.output').text('No list!');
    }
});

/*Drop-Down menu for Assign Parameter Choice*/
$('body').on('click', function(e) {
    if(!$(e.target).hasClass('assign-parameter-choice-list') && !$(e.target).parent().hasClass('assign-parameter-choice-btn') && $('.assign-parameter-choice-list').css('visibility') === 'visible') {
        $('.assign-parameter-choice-list').css('visibility','hidden');
    }
    else if($(e.target).parent().hasClass('assign-parameter-choice-btn') && $('.assign-parameter-choice-list').css('visibility') === 'visible') {
        $('.assign-parameter-choice-list').css('visibility','hidden');
    }
    else if($(e.target).parent().hasClass('assign-parameter-choice-btn') && $('.assign-parameter-choice-list').css('visibility') === 'hidden') {
        $('.assign-parameter-choice-list').css('visibility','visible');
    }
});

$('.assign-parameter-choice-list li').on('click', function() {
    $('.'+$(this).text()).css('display','inline');
    $('.assign-parameter-choice-div').hide();
    $('.assign-parameter-choice-list').css('visibility','hidden');
});

$('.back-arrow').on('click', function() {
    if($('.assign-parameter-choice-div').is(':visible')) {
        return;
    }
    else {
        //First div that is shown on the assign-div
        $('.assign-div > div').hide();
        $('.assign-parameter-choice-div').show();
    }
})