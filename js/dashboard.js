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

function contract(){
    dashboard.style.width = "100px";
    navigation.style.width = "100px";
    dashboard.style.transition = "all 0.5s";
    navigation.style.transition = "all 0.5s";
    logo.style.marginLeft = "25px";
    logo.style.width = "50px";
    logo.style.height = "50px";
    logo.style.transition = "all 0.5s";
    logout_button.style.marginLeft = "0";
    logout_button.style.width = "70px";
    logout_button.style.transition = "all 0.5s";
    display.style.width = "90vw";
    display.style.transition = "all 0.5s";
}

function Dexpand(){
    dashboard.style.width = "200px";
    navigation.style.width = "200px";
    dashboard.style.transition = "all 0.5s";
    navigation.style.transition = "all 0.5s";
    logo.style.marginLeft = "50px";
    logo.style.width = "100px";
    logo.style.height = "100px";
    logo.style.transition = "all 0.5s";
    logout_button.style.marginLeft = "35px";
    logout_button.style.width = "100px";
    logout_button.style.transition = "all 0.5s";
    display.style.width = "80vw";
    display.style.transition = "all 0.5s";
}