var nodelist = document.getElementsByTagName('li');
var i;
for (i = 0; i < nodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    nodelist[i].appendChild(span)
}

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

}
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
function newelement() {
    var item = document.createElement('li');
    var input = document.getElementById('title').value;
    var txt = document.createTextNode(input);
    item.appendChild(txt);
    if (input === "") {
        alert("add something");
    }
    var list = document.getElementById('myUL');
    list.appendChild(item);
    document.getElementById('title').value = '';
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    item.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
