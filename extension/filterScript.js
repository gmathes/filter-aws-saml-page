function add_filter() {

    var textbox = document.createElement("input");

    //Create Labels
    var label = document.createElement("Label");
    label.innerHTML = "Filter";

    //Assign different attributes to the input box
    textbox.setAttribute("type", "text");
    textbox.setAttribute("value", "");
    textbox.setAttribute("name", "filter");
    textbox.setAttribute("style", "width:200px");
    textbox.setAttribute("id", "filter")

    label.setAttribute("style", "font-weight:normal");

    // grabbing the container div and putting it on top
    var main = document.getElementById("container");

    // prepending the label and text box
    main.prepend(label);
    main.prepend(textbox);

    // putting cursor in text box
    textbox.focus();
    textbox.select();
}

function add_event() {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('event.js');
    s.onload = function () {
        this.remove();
    };
    document.head.appendChild(s);
    console.log("Added event script")
}

window.onload = function () {
    add_filter();
    add_event();
}
