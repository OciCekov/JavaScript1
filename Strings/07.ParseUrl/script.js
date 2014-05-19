function parseAddress(url) {

    var index = url.indexOf(":");
    var secondIndex = url.indexOf("/", index + 3);

    return {
        protocol: url.substring(0, index + 1),
        server: url.substring(index + 3, secondIndex),
        resources: url.substring(secondIndex, url.length)
    }
}

function showResult() {
    var url = document.getElementById('input').value;
    var parsed = parseAddress(url);
    document.getElementById('result').value = "protocol: " + parsed.protocol + "\nserver: " + parsed.server + "\nresources: " + parsed.resources;
}
