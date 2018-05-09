var ethSection = document.getElementById('ETH-Segment'),
    btcSection = document.getElementById('BTC-Segment'),
    zrxSection = document.getElementById('ZRX-Segment');
var pieDisplay = document.getElementById('pie-display');
var coins = [
    {
        "name": "Bitcoin",
        "gain": " +1.23%",
        "price": "$9,000",
        "available": "0.32 BTC (33%)",
        "value": "0.32 BTC ($3,000 USD)"
    },
    {
        "name": "Ethereum",
        "gain": " +1.23%",
        "price": "$1,000",
        "available": "1 ETH (33%)",
        "value": "0.32 BTC ($3,000 USD)"
    },
    {
        "name": "0x",
        "gain": " +1.23%",
        "price": "$1",
        "available": "200 ZRX (33%)",
        "value": "0.32 BTC ($3,000 USD)"
    }
];

function PiePopUp(){
    pieDisplay.style.display = "block";
    pieDisplay.style.position = "absolute";
    pieDisplay.style.right = "150px";
    pieDisplay.style.textAlign = "left";
    pieDisplay.style.width = "220px";
    pieDisplay.style.padding = "10px";
    pieDisplay.style.backgroundColor = "rgba(245, 245, 245, 0.7)";
    pieDisplay.style.border = "solid 1px gray";
}
function PiePop(){
    pieDisplay.style.display = "none";
}

btcSection.addEventListener('mouseover', function(ev){
    PiePopUp();
    pieDisplay.innerHTML = "<p>"+coins[0].name+"<span style='color:green'>"+coins[0].gain+"</span><br>"+coins[0].price+"<br><b>"+"Available: "+coins[0].available+"</b><br><b>"+"Value: "+coins[0].value+"</b></p>";
    btcSection.addEventListener('mouseout', function(ev){
        PiePop();
    });
});
ethSection.addEventListener('mouseover', function(ev){
    PiePopUp();
    pieDisplay.innerHTML = "<p>"+coins[1].name+"<span style='color:green'>"+coins[1].gain+"</span><br>"+coins[1].price+"<br><b>"+"Available: "+coins[1].available+"</b><br><b>"+"Value: "+coins[1].value+"</b></p>";
    ethSection.addEventListener('mouseout', function(ev){
        PiePop();
    });
});
zrxSection.addEventListener('mouseover', function(ev){
    PiePopUp();
    pieDisplay.innerHTML = "<p>"+coins[2].name+"<span style='color:green'>"+coins[2].gain+"</span><br>"+coins[2].price+"<br><b>"+"Available: "+coins[2].available+"</b><br><b>"+"Value: "+coins[2].value+"</b></p>";
    ethSection.addEventListener('mouseout', function(ev){
        PiePop();
    });
});