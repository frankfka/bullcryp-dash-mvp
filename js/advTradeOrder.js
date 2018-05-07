var controls = document.getElementsByClassName("HContsItem");
var orderContainerHolder = document.getElementById('orderHolder');

// objects
function openOrders (date, pair, type, side, price, amount, filled, total, trigCond) {
    this.date = date;
    this.pair = pair;
    this.type = type;
    this.side = side;
    this.price = price;
    this.amount = amount;
    this.filled = filled;
}

function orderHistory (date, pair, type, side, avg, price, filled, amount, total, trigCond, status) {
    this.date = date;
    this.pair = pair;
    this.type = type;
    this.side = side;
    this.avg = avg;
    this.price = price;
    this.filled = filled;
    this.amount = amount;
    this.total = total;
    this.trigCond = trigCond;
    this.status = status;
}

function Funds (coin, totalBalance, availableBalance, inOrder, btcValue){
    this.coin = coin;
    this.totalBalance = totalBalance;
    this.availableBalance = availableBalance;
    this.inOrder = inOrder;
    this.btcValue = btcValue;
}


// data creation
function OpenOrdersTable (){
    orderContainerHolder.innerHTML = "";
    this.className = "HContsItem currTab";
    var table = document.createElement("table");
    orderContainerHolder.appendChild(table);
    var tHead = document.createElement("thead");
    table.appendChild(tHead);
    var tBody = document.createElement("tbody");
    table.appendChild(tBody);
    var trHead = document.createElement("tr");
    tHead.appendChild(trHead);
    var tableinfo = ['Date', 'Pair', 'Type', 'Side', 'Price', 'Amount', 'Filled%', 'Total', 'Trigger Conditions'];
    for (var i = 0; i < tableinfo.length; i++){
        trHead.innerHTML += "<th>"+tableinfo[i]+"</th>";
    }
}

function OrderHistoryTable (){
    orderContainerHolder.innerHTML = "";
    var table = document.createElement("table");
    orderContainerHolder.appendChild(table);
    var tHead = document.createElement("thead");
    table.appendChild(tHead);
    var tBody = document.createElement("tbody");
    table.appendChild(tBody);
    var trHead = document.createElement("tr");
    tHead.appendChild(trHead);
    var tableinfo = ['Date', 'Pair', 'Type', 'Side', 'Avg', 'Price', 'Filled', 'Amount', 'Total', 'Status'];
    for (var i = 0; i < tableinfo.length; i++){
        trHead.innerHTML += "<th>"+tableinfo[i]+"</th>";
    }

    var items = [new orderHistory('28/04/16', 'EOS/BTC', 'Limit', 'Sell', 0.00203000, 0.0020300, '4.00', '4.00', 0.00812000, undefined, 'Filled'), new orderHistory('28/04/16', 'EOS/BTC', 'Limit', 'Sell', 0.00203000, 0.0020300, '4.00', '4.00', 0.00812000, undefined, 'Filled') /*add more*/];
    for (var i = 0; i < tableinfo.length; i++){
        tBody.innerHTML += "<tr><td>"+items[i].date+"</td><td>"+items[i].pair+"</td><td>"+items[i].type+"</td><td>"+items[i].side+"</td><td>"+items[i].avg+"</td><td>"+items[i].price+"</td><td>"+items[i].filled+"</td><td>"+items[i].amount+"</td><td>"+items[i].total+"</td><td>"+items[i].status+"</td></tr>";
    }
}

function FundsData (){
    orderContainerHolder.innerHTML = "";
    var table = document.createElement("table");
    orderContainerHolder.appendChild(table);
    var tHead = document.createElement("thead");
    table.appendChild(tHead);
    var tBody = document.createElement("tbody");
    table.appendChild(tBody);
    var trHead = document.createElement("tr");
    tHead.appendChild(trHead);
    var tableinfo = ['Coin', 'Total Balance', 'Available Balance', 'In Order', 'BTC Value'];
    for (var i = 0; i < tableinfo.length; i++){
        trHead.innerHTML += "<th>"+tableinfo[i]+"</th>";
    }

    var items = [new Funds('BND', 0.93835656, 0.93835656, '0.00000000', 0.10050953), new Funds('BTC', 0.03950796, 0.03950796, '0.00000000', 0.03950796) /*add more*/];
    for (var i = 0; i < items.length; i++){
        tBody.innerHTML += "<tr><td>"+items[i].coin+"</td><td>"+items[i].totalBalance+"</td><td>"+items[i].availableBalance+"</td><td>"+items[i].inOrder+"</td><td>"+items[i].btcValue+"</td></tr>";
    }
}

OpenOrdersTable();

// navigation
controls[0].addEventListener('click', function(ev){
    this.className = "HContsItem currTab";
    controls[1].className = "HContsItem"; 
    controls[2].className = "HContsItem";
    controls[3].className = "HContsItem";
    OpenOrdersTable();
});
controls[1].addEventListener('click', function(ev){
    this.className = "HContsItem currTab";
    controls[0].className = "HContsItem";
    controls[2].className = "HContsItem";
    controls[3].className = "HContsItem";
    OrderHistoryTable();   
});
controls[2].addEventListener('click', function(ev){
    this.className = "HContsItem currTab";
    controls[0].className = "HContsItem";
    controls[1].className = "HContsItem";
    controls[3].className = "HContsItem";
    OpenOrdersTable();
});
controls[3].addEventListener('click', function(ev){
    this.className = "HContsItem currTab";
    controls[0].className = "HContsItem";
    controls[1].classList = "HContsItem";
    controls[2].className = "HContsItem";
    FundsData();
});