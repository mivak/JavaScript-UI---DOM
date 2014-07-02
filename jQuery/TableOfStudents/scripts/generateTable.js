window.onload = function () {
    var students = [
            { firstName: 'Ivan', lastName: 'Ivanov', grade: 3 },
            { firstName: 'Petar', lastName: 'Petrov', grade: 6 },
            { firstName: 'Georgi', lastName: 'Georgiev', grade: 12 },
            { firstName: 'Zdravko', lastName: 'Zdravkov', grade: 7 }
    ];

    $("#holder").append("<table />");
    $("table").append("<thead />");
    $("thead").append("<tr><th>First Name</th><th>Last Name</th><th>Grade</th></tr>");
    $("table")
    .css('border-collapse', 'collapse')
    .append("<tbody />");

    var rows = $.map(students, function (student) {
        return "<tr><td>" + student.firstName + "</td><td>" +
            student.lastName + "</td><td>" + student.grade + "</td></tr>";
    });

    for (var i = 0; i < rows.length; i++) {
        $("tbody").append(rows[i]);
    }
}