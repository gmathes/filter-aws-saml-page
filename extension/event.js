function filter() {
    txt = document.getElementById("filter").value;
    console.log(txt);
    var accounts = document.getElementsByClassName("saml-account");
    for (var i = 0; i < accounts.length; i++) {
        var name = accounts[i].getElementsByClassName("saml-account-name")[0]
        if (name != undefined) {
            if (name.innerHTML.includes(txt)) {
                console.log(name.innerHTML);
                accounts[i].style.display = 'block';
            }
            else {
                accounts[i].style.display = 'none';
            }
        }
    }
}


console.log("event script loaded!");
document.getElementById("filter").addEventListener('keypress', filter);
