(function ($) {
    $.fn.listview = function (itemsToDisplay) {
        var $this = $(this),
            templateId = $this.data('template'),
            templateSource,
            template,
            result;

        if (templateId) {
            templateSource = $('#' + templateId).html();
        } else {
            templateSource = $('#students-table-template').html();
        }

        template = Handlebars.compile(templateSource);
        result = template(itemsToDisplay);

        $this.append(result);

        return $this;
    }
}(jQuery));

var books = {
    books: [
        { id: 1, title: 'JavaScript: The good parts' },
        { id: 2, title: 'Secrets of the JavaScript Ninja' },
        { id: 3, title: 'Core HTML5 Canvas: Graphics, Animation, and Game Development' },
        { id: 4, title: 'JavaScript Patterns' },
    ]
},
    students = {
    students: [
        { name: 'Petar Petrov', mark: 5.5 },
        { name: 'Stamat Georgiev', mark: 4.7 },
        { name: 'Maria Todorova', mark: 6 },
        { name: 'Georgi Geshov', mark: 3.7 },
        { name: 'Anna Hristova', mark: 4 },
    ]
};

$('#books-list').listview(books);
$('#students-table-body').listview(students);
$('#div-students-table').listview(students);