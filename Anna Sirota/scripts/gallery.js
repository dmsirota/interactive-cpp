$('.project1').on('click', function(){
    closeSubMenu();
    $('.subproject-list1').addClass('active');
    $('.project1').addClass('background');
});
$('.project2').on('click', function(){
    closeSubMenu();
    $('.subproject-list2').addClass('active');
    $('.project2').addClass('background');
});
$('.project3').on('click', function(){
    closeSubMenu();
    $('.subproject-list3').addClass('active');
    $('.project3').addClass('background');
});
var closeSubMenu = function(){
    for (var i = 0; i <= 3; i++) {
        $('.subproject-list' + i).removeClass('active');
        $('.project' + i).removeClass('background');
    }
}
