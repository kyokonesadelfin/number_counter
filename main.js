$(document).ready(function (e) {
    var value_Element = $('.value');

    function increaseValue(e) {
        value_Element.text(Math.max(parseInt(value_Element.text()) + e.data.increase));
        return false;
    }
    $('#plus').bind('click', {
        increase: 1
    }, increaseValue)

    $('#minus').bind('click', {
        increase: -1
    }, increaseValue)

    $("#plus").on({
        click: function(){
        $(this).css("background-color", "green");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
            }
    });
    
    $("#minus").on({
        click: function(){
        $(this).css("background-color", "red")
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
            }
    })
})