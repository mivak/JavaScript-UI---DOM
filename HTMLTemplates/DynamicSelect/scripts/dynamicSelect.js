﻿window.onload = function () {
    var items = [
        {
            value: 1,
            text: 'One'
        },
        {
            value: 2,
            text: 'Two'
        },
        {
            value: 3,
            text: 'Three'
        },
        {
            value: 4,
            text: 'Four'
        },
        {
            value: 5,
            text: 'Five'
        },
        {
            value: 6,
            text: 'Six'
        },
        {
            value: 7,
            text: 'Seven'
        }
    ],
        templateSource = document.getElementById('post-template').innerHTML
        template = Handlebars.compile(templateSource),
        selectOptionsHtml = template({ items: items }),
        container = document.getElementById('container');

    container.innerHTML += selectOptionsHtml;
};