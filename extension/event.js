function filter() {
    txt = document.getElementById("filter").value;
    console.log(txt);
    var accounts = document.getElementsByClassName("saml-account");
    var filtered = []
    for (var i = 0; i < accounts.length; i++) {
        var name = accounts[i].getElementsByClassName("saml-account-name")[0]
        if (name != undefined) {
            if (name.innerHTML.includes(txt)) {
                console.log(name.innerHTML);
                accounts[i].style.display = 'block';
                filtered.push(accounts[i])
            }
            else {
                accounts[i].style.display = 'none';
            }
        }
    }
    return filtered
}

function select(event) {
    filtered_accounts = filter();
    if (event.key === "Enter") {
        // Selects first filtered account
        var radio = filtered_accounts[0].getElementsByTagName('input');
        if (!radio[0].checked) {
            radio[0].checked = true;
        }
        // if already clicked, sign in
        else {
            var button = document.getElementById("signin_button");
            button.click();
        }
    }
}

console.log("event script loaded!");
document.getElementById("filter").addEventListener('keypress', filter);
document.addEventListener('keydown', select);
