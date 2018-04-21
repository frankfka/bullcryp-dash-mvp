var dashboard = document.getElementById('dashboard');
var logo = document.getElementById('bullcryp_logo');
var navigation = document.getElementById('nav');
var navElements = document.getElementsByClassName('nav_element');
var logout_button = document.getElementById('logout');
var controls = document.getElementById('dash_control');

var display = document.getElementById('generalDisplay');

var dash_clicks = 0;
//--- When Arrow is Clicked On, contract dashboard ---//
controls.addEventListener('click', function expand(ev){
    dash_clicks++;
    if (dash_clicks == 1){
        controls.innerHTML = "&gt;";
        // dashboard and navigation and elements contract
        contract();
    } else if (dash_clicks == 2){
        controls.innerHTML = "&lt;";
        dash_clicks = 0;
        // dashboard expand
        Dexpand();
    }
});

//Navigation
navElements[0].addEventListener('click', function(ev){
    location.href = "../index.html";
});
navElements[1].addEventListener('click', function(ev){
    location.href = "../html/trade.html";
});
navElements[2].addEventListener('click',function(ev){
    location.href = "../html/portfolio.html";
});
navElements[3].addEventListener('click', function(ev){
    location.href = "../html/settings.html";
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
    logout_button.style.width = "70px";
    logout_button.style.padding = "0";
    logout_button.style.pointerEvents = "none";
    logout_button.innerHTML = "";
    logout_button.style.marginLeft = "0";
    logout_button.style.opacity = "0";
    logout_button.style.transition = "all 0.5s";
    display.style.marginLeft = "100px";
    display.style.transition = "all 0.5s";

    //icons
    navElements[0].innerHTML = "<img width='35' height='35' src='../imgs/Overview_icon.png' alt='overview icon'/>";
    navElements[1].innerHTML = "<img width='35' height='35' src='../imgs/Trade_icon.png' alt='trade icon'/>";
    navElements[2].innerHTML = "<img width='35' height='35' src='../imgs/Portfolio_icon.png' alt='portfolio icon'/>";
    navElements[3].innerHTML = "<img width='35' height='35' src='../imgs/Settings_icon.png' alt='settings icon'/>";
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
    logout_button.style.width = "100px";
    logout_button.style.marginLeft = "35px";
    logout_button.style.padding = "14px";
    logout_button.style.pointerEvents = "auto";
    logout_button.innerHTML = "Logout";
    logout_button.style.opacity = "1";
    display.style.marginLeft = "200px";
    display.style.transition = "all 0.5s";

    //icons vanish
    navElements[0].innerHTML = "<img class='icon_images' src='../imgs/Overview_icon.png' alt='overview'>Overview";
    navElements[1].innerHTML = "<img class='icon_images' src='../imgs/Trade_icon.png' alt='trade'>Trade";
    navElements[2].innerHTML = "<img class='icon_images' src='../imgs/Portfolio_icon.png' alt='portfolio'>Portfolio";
    navElements[3].innerHTML = "<img class='icon_images' src='../imgs/Settings_icon.png' alt='settings'>Settings";
}