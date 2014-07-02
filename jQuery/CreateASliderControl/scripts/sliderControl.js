window.onload = function () {
    var index = 0,
        sliderItems = $(".sliderItem"),
        $div = $('<div />');

    $('<button />')
    .addClass('prev')
    .text('<')
    .on('click', prev)
    .appendTo($div);

    $('<button />')
    .addClass('next')
    .text('>')
    .on('click', next)
    .appendTo($div);

    $div.prependTo(document.body);

    sliderItems.css('display', 'none');
    sliderItems.css('max-width', '800px');
    sliderItems.css('text-align', 'justify');

    function next() {
        index++;
        if (index >= sliderItems.length) {
            index = 0;
        }

        sliderItems.hide();
        nextItem = $(sliderItems[index]);
        nextItem.show();
    }

    function prev() {
        index--;
        if (index <= 0) {
            index = sliderItems.length - 1;
        }

        sliderItems.hide();
        var nextItem = $(sliderItems[index]);
        nextItem.show();
    }

    next();
    setInterval(function () {
        next();
    }, 5000);
}