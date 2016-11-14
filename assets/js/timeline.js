function createTimeline(results) {
    var data = [];

    for (var i = 0; i < results.length; i++) {
        var item = results[i];
        item.id = guid();

        if (!item.end) {
            item.end = null;
        }

        data.push(item);
    }

    var items = new vis.DataSet(data);
    var options = {};

    var container = document.getElementById('visualization');
    container.innerHTML = "";

    var timeline = new vis.Timeline(container, items, options);
}

// taken from http://stackoverflow.com/a/105074
function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function timeline() {
    var container = document.getElementById('visualization');
    container.innerHTML = "Loading timeline...";

    var url = document.getElementById('url');
    Tabletop.init({ key: url.value,
                    callback: createTimeline,
                    simpleSheet: true });

    return false;
}
