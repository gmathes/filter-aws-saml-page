function createTextInput(id, labelText, style) {
  let label = document.createElement("label");
  label.innerHTML = labelText;
  label.htmlFor = id;

  let textbox = document.createElement("input");
  textbox.type = "text";
  textbox.name = id;
  textbox.id = id;
  textbox.style = style;

  return { label, textbox };
}

function addFilter() {
  const { label, textbox } = createTextInput("filter", "Filter", "width:200px");
  label.style.fontWeight = "normal";

  const main = document.getElementById("container");
  main.prepend(textbox);
  main.prepend(label);

  textbox.focus();
  textbox.select();
}

function addEventScript() {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('event.js');
  script.onload = function () {
    this.remove();
  };
  document.head.appendChild(script);
  console.log("Added event script");
}

window.onload = function () {
  addFilter();
  addEventScript();
}
