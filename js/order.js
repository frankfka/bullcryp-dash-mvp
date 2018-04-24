var tabItem = document.getElementsByClassName('tabItem');
var orderdisplay = document.getElementById('tabDisplay');

//objects definition
function Holdings(name, price, change, changeAmount, available, btcvalue, usdvalue, currency){
    this.name = name;
    this.image = name+".png";
    this.price = "$"+price;
    this.change = {
        "gain":change,
        "gainAmount":changeAmount,
        "indicator":"%"
    }
    this.available = {
        "amount":available
    }
    this.btcvalue = {
        "value": btcvalue
    }
    this.currency = currency;
    this.usdvalue = "$"+usdvalue;

    if (this.change.gain == true){
        this.change.gain = "+";
        this.change.color = "green";
    } else {
        this.change.gain = "-";
        this.change.color = "red";
    }
}

function MyOrders(pair1, pair2, exchange, curr_price, type, bid, amt, value){
    this.pair = {
        "first":pair1,
        "second":pair2,
        "exchange":exchange
    };
    this.curr_price = curr_price;
    this.type = type;
    this.bid = bid;
    this.amt = amt;
    this.value = value;
}

function MarketMover(pair, exchange){
    this.pair = "BAT / BTC";
    this.exchange = {
        "name":exchange,
        "fourHR":{
            "gain":"-",
            "amount":"6.43",
            "indicator":"%"
        },
        "twoHR":{
            "gain":"-",
            "amount":"6.43",
            "indicator":"%"
        },
        "thirtyMin":{
            "gain":"+",
            "amount":"2.32",
            "indicator":"%"
        },
        "tenMin":{
            "gain":"+",
            "amount":"0.01",
            "indicator":"%"
        },
        "threeMin":{
            "gain":"-",
            "amount":"0.34",
            "indicator":"%"
        }
    }
}

//navigation
for (var i = 0; i < tabItem.length; i++){
    tabItem[i].addEventListener('click', function(ev){
        switch (this.innerHTML) {
            case 'Holdings':
                this.className += " current";
                tabItem[1].className = "tabItem";
                tabItem[2].className = "tabItem";
                tabItem[3].className = "tabItem";
                displayHoldings();
            break;
            case 'Orders':
                this.className += " current";
                tabItem[0].className = "tabItem";
                tabItem[2].className = "tabItem";
                tabItem[3].className = "tabItem";
                displayOrders();
            break;
            case 'Market Movers':
                this.className += " current";
                tabItem[0].className = "tabItem";
                tabItem[1].className = "tabItem";
                tabItem[3].className = "tabItem";
                displayMarketMovers();
            break;
            case 'Watchlist':
                this.className += " current";
                tabItem[0].className = "tabItem";
                tabItem[1].className = "tabItem";
                tabItem[2].className = "tabItem";
                orderdisplay.innerHTML = "";
            break;
        }
        if (this.classList.contains('current')){
            console.log(this.innerHTML);
        }
    });
}

// creating objects
var holdingOne = new Holdings("Bitcoin", "200,000", true, "100.00", "0.1", "0.1", "20,000", "BTC");
var myOrdersOne = new MyOrders("BTC", "BAT", "Binance", "0.002", "Buy", "0.002", 3, "0.0006");
var marketMoversOne = new MarketMover("BAT / BTC", "Binance");

//arrays
var myHoldings = [holdingOne, holdingOne, holdingOne, holdingOne];
var myOrderArr = [myOrdersOne, myOrdersOne, myOrdersOne, myOrdersOne, myOrdersOne];
var myMarketWatchArr = [marketMoversOne, marketMoversOne, marketMoversOne, marketMoversOne]

// display the right things on the display
function displayHoldings(){
    orderdisplay.innerHTML = "";
    var table = document.createElement("table");
    table.id = "holdTable";
    var tableBody = document.createElement("tbody");
    var tableHead = document.createElement("thead");
    var tableRow = document.createElement("tr");
    tableHead.innerHTML = "<tr><th>Name</th><th>Price</th><th>24hr Change (%)</th><th>Available</th><th>BTC Value</th><th>USD Value</th></tr>";
    //this should be an array of items
    for (var i = 0; i < myHoldings.length; i++){
        tableBody.innerHTML+="";
            tableRow.innerHTML = "<td>" + /*image*/ myHoldings[i].name + "</td>" + "<td>" + myHoldings[i].price + "</td>" + "<td style='color:"+myHoldings[i].change.color+"'>" + myHoldings[i].change.gain+myHoldings[i].change.gainAmount+myHoldings[i].change.indicator + "</td>" + "<td>" + myHoldings[i].available.amount+myHoldings[i].currency + "</td>" + "<td>" + myHoldings[i].btcvalue.value+myHoldings[i].currency + "</td>" + "<td>" + myHoldings[i].usdvalue + "</td>";
        table.appendChild(tableBody);
        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableHead);
    orderdisplay.appendChild(table);
}
function displayOrders(){
    orderdisplay.innerHTML = "";
    var table = document.createElement("table");
    table.id = "holdTable";
    var tableHead = document.createElement("thead");
    var tableBody = document.createElement("tbody");
    var tableRow = document.createElement("tr");
    tableHead.innerHTML = "<tr><th width='30%'>Pair</th><th>Current Price</th><th>Type</th><th>Bid/Ask</th><th>Amount</th><th>Value</th><th></th><th></th></tr>";
    for (var i = 0; i < myOrderArr.length; i++){
        tableBody.innerHTML += "";
        tableRow.innerHTML = "<td>"+myOrderArr[i].pair.first+" -> "+myOrderArr[i].pair.second+" ("+myOrderArr[i].pair.exchange+")"+"</td>" + "<td>"+myOrderArr[i].curr_price+myOrderArr[i].pair.first+"</td>" + "<td>"+myOrderArr[i].type+"</td>" + "<td>"+myOrderArr[i].bid+myOrderArr[i].pair.first+"</td>" + "<td>"+myOrderArr[i].amt+myOrderArr[i].pair.second+"</td>" + "<td>"+myOrderArr[i].value+myOrderArr[i].pair.first+"</td>"+"<td><button class='button'>Change</button>"+"</td>"+"<td><button class='button'>X</button>"+"</td>";
        table.appendChild(tableBody);
        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableHead);
    orderdisplay.appendChild(table);
}
function displayMarketMovers(){
    orderdisplay.innerHTML = "";
    var controls = document.createElement("div");
    var table = document.createElement("table");
    table.id = "holdTable";
    var tableHead = document.createElement("thead");
    var tableBody = document.createElement("tbody");
    var tableRow = document.createElement("tr");
    tableHead.innerHTML = "<tr><th width='30%'>Pair</th><th>Exchange</th><th>4hr</th><th>2hr</th><th>30min</th><th>10min</th><th>3min</th></tr>";
    for (var i = 0; i < myMarketWatchArr.length; i++){
        tableBody.innerHTML += "";
        tableRow.innerHTML = "<td>"+myMarketWatchArr[i].pair+"</td>" + "<td>"+myMarketWatchArr[i].exchange.name+"</td>" + "<td>"+myMarketWatchArr[i].exchange.fourHR.gain+myMarketWatchArr[i].exchange.fourHR.amount+myMarketWatchArr[i].exchange.fourHR.indicator+"</td>" + "<td>"+myMarketWatchArr[i].exchange.twoHR.gain+myMarketWatchArr[i].exchange.twoHR.amount+myMarketWatchArr[i].exchange.twoHR.indicator+"</td>" + "<td>"+myMarketWatchArr[i].exchange.thirtyMin.gain+myMarketWatchArr[i].exchange.thirtyMin.amount+myMarketWatchArr[i].exchange.thirtyMin.indicator+"</td>" + "<td>"+myMarketWatchArr[i].exchange.tenMin.gain+myMarketWatchArr[i].exchange.tenMin.amount+myMarketWatchArr[i].exchange.tenMin.indicator+"</td>" + "<td>"+myMarketWatchArr[i].exchange.threeMin.gain+myMarketWatchArr[i].exchange.threeMin.amount+myMarketWatchArr[i].exchange.threeMin.indicator+"</td>"
        table.appendChild(tableBody);
        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableHead);
    orderdisplay.appendChild(controls);
    orderdisplay.appendChild(table);
    controls.innerHTML = "<input class='formElements' type='text' placeholder='Filter for Pair'><select class='classic'><option value='All Exchanges'>All Exchanges</option><option value='Binance'>Binance</option></select>";
}

displayHoldings();