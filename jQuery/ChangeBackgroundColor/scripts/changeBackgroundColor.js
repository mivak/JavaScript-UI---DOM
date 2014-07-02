window.onload = function () {
    $('<input type="color" />')
    .addClass('color')
    .appendTo(document.body);
    
    $('<button />')
    .text('change background')
    .on('click', onChangeBackgroundClick)
    .appendTo(document.body);

    function onChangeBackgroundClick() {
        $color = $('.color').val();
        document.bgColor = $color;
    }
}