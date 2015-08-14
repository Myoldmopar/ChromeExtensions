function openLink() {
    var href = this.href;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: href});
    });
}

window.onload = function () {
    var hrefs = document.getElementsByTagName("a");
    for (var i=0,a; a=hrefs[i]; ++i) {
        hrefs[i].addEventListener('click', openLink);
    }
}
