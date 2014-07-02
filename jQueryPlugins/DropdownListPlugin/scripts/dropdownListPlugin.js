window.onload = function ($) {
    $.fn.dropdown = function () {
        var $this = $(this),
            selectionOptions = $this.find('option'),
            $dropdownListContainer = $('<div />'),
            $dropdownListOptions = $('<ul />'),
            $dropdownOption = $('<li />'),
            $allLiItems;

        $this.hide();
        $dropdownListContainer.addClass('dropdown-list-container');
        $dropdownListOptions.addClass('dropdown-list-options');
        $dropdownOption.addClass('dropdown-list-option')
            .css('list-style', 'none')
            .css('font-size', '60px');

        for (var i = 0, len = selectionOptions.length; i < len; i++) {
            var optionHtml = $(selectionOptions[i]).html();

            $dropdownOption.data('data-value', i);
            $dropdownOption.html(optionHtml);

            $dropdownListOptions.append($dropdownOption.clone(true));
        }

        $dropdownListContainer.append($dropdownListOptions);
        $this.after($dropdownListContainer);

        $allLiItems = $dropdownListContainer.find('.dropdown-list-option');

        $allLiItems.on('click', function () {
            var $this = $(this);
                clickedItemDataValue = $this.data('data-value') + 1,
                $dropdownListOptions = $('.dropdown-list-options'),
                $dropdown = $('#dropdown');

            $dropdown.find(':selected').removeAttr('selected', '');
            $dropdownListOptions.find('.selected-item')
                .removeClass('selected-item')
                .css('color', 'black');

            $dropdown.find("option[value='" + clickedItemDataValue + "']")
                .attr('selected', 'selected');

            $this.addClass('selected-item');
            $dropdownListOptions.find('.selected-item')
                .css('color', 'red');
        });
    }

    $('#dropdown').dropdown();
}(jQuery);