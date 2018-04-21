// variables
var setnavigation = document.getElementsByClassName('settingsNav');
var setdisplay = document.getElementById('settingsDisplay');

// objects
function Account(first, last, email, password, status, billing, type, nextp){
    this.name = {
        "first": first,
        "last": last
    }
    this.email = email;
    this.password = password;
    this.status = status;
    this.billing = billing;
    this.type = type;
    this.nextp = nextp;
    this.exchanges = [{"name":"Poloniex","APIKey":"as2314k12jg27jfa12","APISecret":"as2314k12jg27jfa12"},{"name":"Binance","APIKey":"as2314k12jg27jfa12","APISecret":"as2314k12jg27jfa12"}]
}

var account1 = new Account('Frank', 'Jia', 'frankfka@gmail.com', 1234567, 'Premium', 'PayPal', '$10 recurring monthly', 'April 21, 2018');

function General(){
    setdisplay.innerHTML = "<h2>Basic Information</h2>" + "<p><strong>Name: </strong>" + account1.name.first + " " + account1.name.last + "</p><p><strong>Email: </storng>" + account1.email + "</p><p><strong>Password: </strong>" + account1.password + "</p>" + "<br/>" + "<button class='general'>Change</button>" + "<h2>Account</h2>" + "<p><strong>Status: </strong>" + account1.status  + " </p><button id='upgrade'>Upgrade Now</button><p><strong>Billing: </storng>" + account1.billing + "</p><p><strong>Next Payment </strong>" + account1.nextp + "</p>" + "<div class='modify' id='modify'><button class='general'>Modify Billing</button></div>";

    modify.style.textAlign = "center";
    upgrade.style.display = "inline";

    if (account1.status == "Premium") {
        modify.style.display = "block";
        upgrade.style.display = "none";
    } else {
        modify.style.display = "none";
        upgrade.style.display = "block";
    }
}

function Exchange() {
    for (var i = 0; i < account1.exchanges.length; i++){
        setdisplay.innerHTML += "<h2>" + account1.exchanges[i].name + "</h2><p>API Key: <input type='text' size='30' value='" + account1.exchanges[i].APIKey + "' name='input'></p><p>API Secret: <input type='text' size='30' value='" + account1.exchanges[i].APISecret + "' name='input'></p>";
    }
}

General();

// navigation
for (var i = 0; i < setnavigation.length; i++){
    setnavigation[i].addEventListener('click', function(ev){
        switch (this.innerHTML) {
            case 'General': 
                this.className = "settingsNav current";
                setnavigation[1].className = "settingsNav";
                setnavigation[2].className = "settingsNav";
                setdisplay.innerHTML = "";
                General();
            break;
            case 'Exchanges': 
                this.className = "settingsNav current";
                setnavigation[0].className = "settingsNav";
                setnavigation[2].className = "settingsNav";
                setdisplay.innerHTML = "";
                Exchange();
            break;
            case 'Dashboard': 
                this.className = "settingsNav current";
                setnavigation[0].className = "settingsNav";
                setnavigation[1].className = "settingsNav";
                setdisplay.innerHTML = "";
            break;
        }
    });
}