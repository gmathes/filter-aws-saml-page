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

function check_radio(filtered_accounts, account, role) {
  console.log("Trying to check account: " + account + " role: " + role);
  radios = filtered_accounts[account].getElementsByTagName('input');
  radios[role].checked = true;
}

function select(event) {
  filtered_accounts = filter();
  var code = event.keyCode || event.which;
  if (code === 9) {
    // Keep the following line to prevent the default behavior of the Tab key
    event.preventDefault();

    var selected_account = -1;
    var selected_role = 0;

    // Loops through filtered options
    var radio = filtered_accounts[0].getElementsByTagName('input');
    for (var j = 0; j < filtered_accounts.length; j++) {
      account = filtered_accounts[j];
      radios = account.getElementsByTagName('input');
      for (var i = 0; i < radios.length; i++) {
        radio = radios[i];
        if (radio.checked) {
          console.log("checked is " + j + " " + i);
          selected_account = j;
          selected_role = i;
        }
      }
    }
    if (selected_account == -1) {
      check_radio(filtered_accounts, 0, 0);
    }
    else {
      radios = filtered_accounts[selected_account].getElementsByTagName('input');
      if (selected_role == radios.length - 1) {
        if (selected_account == filtered_accounts.length - 1) {
          check_radio(filtered_accounts, 0, 0);
        }
        check_radio(filtered_accounts, selected_account + 1, 0);
      } else {
        check_radio(filtered_accounts, selected_account, selected_role + 1)
      }
    }
  }

  if (event.key === "Enter") {
    var button = document.getElementById("signin_button");
    button.click();
  }
}

function main() {
  selected_input = 0;
  console.log("event script loaded!");
  document.getElementById("filter").addEventListener('keypress', filter);
  document.addEventListener('keydown', select);
}

main()