window.onload = function ($) {
    $.fn.messageBox = function () {
        var $this = $(this);

        function showMessage(message, backgroundColor) {
            var $result = $('#message-box-result');

            $result
                .html(message)
                .css('background-color', backgroundColor)
                .css('font-size', '40px')
                .css('text-align', 'center');

            $result.fadeIn(3000, function () {
                $result.fadeOut(3000, function () {
                    $result.html('');
                });
            });
        }

        return {
            success: function () {
                showMessage('success', 'lightgreen');

                return $this;
            },
            error: function () {
                showMessage('error', 'red');

                return $this;
            }
        };
    }
}(jQuery);

var msgBox = $('#message-box').messageBox();

$('#error-btn').on('click', function () {
    msgBox.error('ERROR', 'red')
});

$('#success-btn').on('click', function () {
    msgBox.success('SUCCESS', 'green')
});