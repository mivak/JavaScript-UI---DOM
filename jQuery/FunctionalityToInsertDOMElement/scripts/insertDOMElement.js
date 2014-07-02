window.onload = function () {
    $('<div />')
    .css('border', '4px solid black')
    .css('width', '50px')
    .css('height', '50px')
    .css('display', 'inline-block')
    .appendTo(document.body);

    function onAddAfterClick() {
        $('<div>')
        .css('border', '4px solid purple')
        .css('display', 'inline-block')
        .css('width', '50px')
        .css('height', '50px')
        .appendTo(document.body);
    }

    function onAddBeforeClick() {
        $('<div>')
        .css('border', '4px solid purple')
        .css('display', 'inline-block')
        .css('width', '50px')
        .css('height', '50px')
        .prependTo(document.body);
    }

    $('<button />')
    .addClass('after')
    .text('Add after')
    .on('click', onAddAfterClick)
    .insertAfter(document.body);

    $('<button />')
    .addClass('before')
    .text('Add before')
    .on('click', onAddBeforeClick)
    .insertAfter(document.body);
}