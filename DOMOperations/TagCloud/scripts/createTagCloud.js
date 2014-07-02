﻿function generateTagCloud(stings, minSize, maxSize) {
    var i = 0, j = 0, k = 0;
    var docFragment = document.createDocumentFragment();
    var addedNamesArray = [];

    for (i = 0; i < tags.length; i++) {
        var string = document.createElement('div');
        string.textContent = tags[i];
        string.style.display = 'inline';
        var isAdded = false;

        for (k = 0; k < addedNamesArray.length; k++) {
            if (tags[i] === addedNamesArray[k]) {
                isAdded = true;
                break;
            }
        }

        if (!isAdded) {
            var sizer = parseInt(minSize) - 1;

            for (j = 0; j < tags.length; j++) {
                if (tags[i] === tags[j]) {
                    sizer++;
                }
            }

            if (sizer > maxSize) {
                sizer = maxSize;
            }

            //console.log(sizer);
            string.style.fontSize = sizer + 'px';
            addedNamesArray.push(tags[i]);
            docFragment.appendChild(string);
        }
    }
    return docFragment;
}

var tags = ["cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "css",
            "css", "css", "css", "css", "css", "css", "css", "css", "css", "css",
           "wordpress", "xaml", "js", "http", "web", "asp.net", "asp.net MVC",
           "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript",
           "http", "http", "CMS", "js", "js", "js", "js", "js", "js", "js", "js"];

var tagCloud = generateTagCloud(tags, 17, 42);

var container = document.createElement('div');
container.style.width = 400 + 'px';
container.style.height = 500 + 'px';
container.style.backgroundColor = '#ccc';
container.style.borderRadius = '30px';
container.style.padding = '20px';

container.appendChild(tagCloud);
document.body.appendChild(container);