var dashboard = document.getElementById('dashboard');
var logo = document.getElementById('bullcryp_logo');
var navigation = document.getElementById('nav');
var navElements = document.getElementsByClassName('nav_element');
var logout_button = document.getElementById('logout');
var controls = document.getElementById('dash_control');
var icon_images = document.getElementsByClassName('icon_images');

var display = document.getElementById('generalDisplay');

var dash_clicks = 0;
//--- When Arrow is Clicked On, contract dashboard ---//
controls.addEventListener('click', function expand(ev){
    dash_clicks++;
    if (dash_clicks == 1){
        controls.innerHTML = "<img class='icon_images' src='./imgs/keyboard-right-arrow-button.png'>";
        // dashboard and navigation and elements contract
        contract();
    } else if (dash_clicks == 2){
        controls.innerHTML = "<img class='icon_images' src='./imgs/left-arrow-key.png'>";        
        dash_clicks = 0;
        // dashboard expand
        Dexpand();
    }
});

//Navigation
navElements[0].addEventListener('click', function(ev){
    location.href = "./index.html";
});
navElements[1].addEventListener('click', function(ev){
    location.href = "./html/trade.html";
});
navElements[2].addEventListener('click',function(ev){
    location.href = "./html/settings.html";
});


// primary functions
function contract(){
    dashboard.style.width = "125px";
    navigation.style.width = "125px";
    navigation.style.textAlign = "center";
    dashboard.style.transition = "all 0.5s";
    navigation.style.transition = "all 0.5s";
    logo.style.marginLeft = "25px";
    logo.style.width = "75px";
    logo.style.height = "75px";
    logo.style.transition = "all 0.5s";
    display.style.marginLeft = "125px";
    display.style.transition = "all 0.5s";

    //icons
    navElements[0].innerHTML = "<img width='35' height='35' src='./imgs/Overview_icon.png' alt='overview icon'/>";
    navElements[1].innerHTML = "<img width='35' height='35' src='./imgs/Trade_icon.png' alt='trade icon'/>";
    navElements[2].innerHTML = "<img width='35' height='35' src='./imgs/Settings_icon.png' alt='settings icon'/>";
    navElements[3].innerHTML = "<img width='35' height='35' src='./imgs/power-button.png' alt='logout icon'/>";    
}

function Dexpand(){
    dashboard.style.width = "200px";
    navigation.style.width = "200px";
    navigation.style.textAlign = "left";
    dashboard.style.transition = "all 0.5s";
    navigation.style.transition = "all 0.5s";
    logo.style.marginLeft = "50px";
    logo.style.width = "100px";
    logo.style.height = "100px";
    logo.style.transition = "all 0.5s";
    display.style.marginLeft = "200px";
    display.style.transition = "all 0.5s";

    //icons vanish
    navElements[0].innerHTML = "<img class='icon_images' src='./imgs/Overview_icon.png' alt='overview'><p>Overview</p>";
    navElements[1].innerHTML = "<img class='icon_images' src='./imgs/Trade_icon.png' alt='trade'><p>Trade</p>";
    navElements[2].innerHTML = "<img class='icon_images' src='./imgs/Settings_icon.png' alt='settings'><p>Settings</p>";
    navElements[3].innerHTML = "<img class='icon_images' src='./imgs/power-button.png' alt='logout'><p>Logout</p>";    
}